/// <reference types="@cloudflare/workers-types" />

type FormLocale = 'ru' | 'by' | 'en';

interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

const responses: Record<FormLocale, Record<string, string>> = {
  ru: {
    invalid: 'Проверьте имя, телефон, email и согласие на обработку данных.',
    limited: 'Слишком много запросов. Попробуйте ещё раз через несколько минут.',
    unavailable: 'Форма ещё не подключена. Позвоните +375 (29) 650-77-79.',
    failed: 'Не удалось отправить запрос. Позвоните +375 (29) 650-77-79.',
    success: 'Запрос получен. Мы свяжемся с вами после проверки исходных данных.',
  },
  by: {
    invalid: 'Праверце імя, тэлефон, email і згоду на апрацоўку даных.',
    limited: 'Занадта шмат запытаў. Паспрабуйце яшчэ раз праз некалькі хвілін.',
    unavailable: 'Форма яшчэ не падключана. Патэлефануйце +375 (29) 650-77-79.',
    failed: 'Не ўдалося адправіць запыт. Патэлефануйце +375 (29) 650-77-79.',
    success: 'Запыт атрыманы. Мы звяжамся з вамі пасля праверкі зыходных даных.',
  },
  en: {
    invalid: 'Please check your name, phone, email and data-processing consent.',
    limited: 'Too many requests. Please try again in a few minutes.',
    unavailable: 'The form is not connected yet. Please call +375 (29) 650-77-79.',
    failed: 'Could not send the request. Please call +375 (29) 650-77-79.',
    success: 'Request received. We will contact you after reviewing the input data.',
  },
};

const attempts = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const json = (body: Record<string, string | boolean>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

const clean = (value: FormDataEntryValue | null, limit: number) =>
  typeof value === 'string' ? value.trim().slice(0, limit) : '';

const resolveLocale = (value: string): FormLocale => value === 'by' || value === 'en' ? value : 'ru';

const isRateLimited = (key: string) => {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  attempts.set(key, recent);
  return false;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, message: responses.ru.invalid }, 403);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, message: responses.ru.invalid }, 400);
  }
  const locale = resolveLocale(clean(form.get('locale'), 2));
  const messageCopy = responses[locale];
  const name = clean(form.get('name'), 100);
  const phone = clean(form.get('phone'), 50);
  const email = clean(form.get('email'), 150);
  const direction = clean(form.get('direction'), 30);
  const message = clean(form.get('message'), 1200);
  const source = clean(form.get('source'), 300);
  const consent = clean(form.get('consent'), 10);
  const honeypot = clean(form.get('website'), 200);

  if (honeypot) return json({ ok: true, message: messageCopy.success });
  const address = request.headers.get('CF-Connecting-IP')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
  if (isRateLimited(address)) return json({ ok: false, message: messageCopy.limited }, 429);

  const phoneDigits = phone.replace(/\D/g, '');
  const validEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validDirection = ['boiler', 'drying', 'other'].includes(direction);
  if (!name || phoneDigits.length < 7 || !validEmail || !validDirection || consent !== 'yes') {
    return json({ ok: false, message: messageCopy.invalid }, 400);
  }

  const directionLabel = { boiler: 'Boiler plant', drying: 'Drying system', other: 'Other' }[direction];
  const text = [
    'New enquiry from esi-pro.by',
    `Language: ${locale.toUpperCase()}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : '',
    `Direction: ${directionLabel}`,
    message ? `Requirement: ${message}` : '',
    source ? `Source: ${source}` : '',
  ].filter(Boolean).join('\n');

  const deliveries: Promise<Response>[] = [];
  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    deliveries.push(fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
    }));
  }

  if (env.RESEND_API_KEY && env.CONTACT_EMAIL && env.CONTACT_FROM_EMAIL) {
    deliveries.push(fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: env.CONTACT_FROM_EMAIL, to: [env.CONTACT_EMAIL], subject: `ESIpro enquiry: ${name}`, text }),
    }));
  }

  if (!deliveries.length) return json({ ok: false, message: messageCopy.unavailable }, 503);

  const results = await Promise.allSettled(deliveries);
  const delivered = results.some((result) => result.status === 'fulfilled' && result.value.ok);
  return delivered
    ? json({ ok: true, message: messageCopy.success })
    : json({ ok: false, message: messageCopy.failed }, 502);
};
