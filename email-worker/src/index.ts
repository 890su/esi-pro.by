/// <reference types="@cloudflare/workers-types" />

interface Env {
  EMAIL: SendEmail;
}

interface ContactEmailRequest {
  name?: unknown;
  replyTo?: unknown;
  text?: unknown;
}

const plain = (value: unknown, limit: number) =>
  typeof value === 'string' ? value.trim().slice(0, limit) : '';

export default {
  async fetch(request, env): Promise<Response> {
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    let payload: ContactEmailRequest;
    try {
      payload = await request.json<ContactEmailRequest>();
    } catch {
      return new Response('Invalid request', { status: 400 });
    }

    const name = plain(payload.name, 100);
    const replyTo = plain(payload.replyTo, 150);
    const text = plain(payload.text, 3000);
    const validReplyTo = !replyTo || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo);
    if (!name || !text || !validReplyTo) return new Response('Invalid request', { status: 400 });

    try {
      await env.EMAIL.send({
        from: { email: 'forms@esi-pro.by', name: 'ESIpro' },
        to: 'bula.esi@gmail.com',
        replyTo: replyTo || undefined,
        subject: `Новая заявка ESIpro — ${name}`,
        text,
      });
      return new Response(null, { status: 204 });
    } catch (error) {
      console.error('Cloudflare Email Sending failed', error);
      return new Response('Email delivery failed', { status: 502 });
    }
  },
} satisfies ExportedHandler<Env>;
