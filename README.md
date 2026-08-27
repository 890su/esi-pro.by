# ESIpro — Astro

Адаптивный многоязычный корпоративный сайт ESIpro на Astro. Структура и содержание восстановлены по архиву старого сайта и каталогу HAMECH, а интерфейс переработан в стилистике польского головного офиса.

## Запуск

```bash
npm install
npm run dev
```

Локальный адрес по умолчанию: `http://localhost:4321/`. Полная техническая проверка:

```bash
npm run verify
```

Production-сборка полностью статическая. Основные страницы обслуживаются CDN, а `/api/contact` выполняется отдельной нативной Cloudflare Pages Function из каталога `functions/`. Для сборки требуется Node.js 22.12+.

Для локальной проверки production-сборки вместе с функцией формы:

```bash
npm run verify
npm run preview
```

## Публикация в Cloudflare Pages

Production-конфигурация хранится в `wrangler.jsonc`. После авторизации Wrangler публикация в проект `esi-pro-by` выполняется командой:

```bash
npm run deploy
```

Сейчас Pages публикуется без Service Binding: адрес `bula.esi@gmail.com` должен сначала быть подтверждён в Cloudflare Email Routing. После подтверждения закрытый Worker `esi-pro-email` можно развернуть командой `npm run deploy:email`, вернуть привязку `EMAIL_SERVICE` в `wrangler.jsonc` и повторно выполнить `npm run deploy:pages`. Worker отправляет письмо через `send_email` binding, ограниченный подтверждённым адресом. Для резервных каналов секреты задаются в настройках Cloudflare Pages и не должны попадать в Git:

```text
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
RESEND_API_KEY
CONTACT_EMAIL
CONTACT_FROM_EMAIL
```

## Языки и страницы

Все публичные страницы доступны на русском, белорусском и английском языках с префиксами `/ru/`, `/by/` и `/en/`. Каталог оборудования, реализованные объекты, отзывы и документы разделены на самостоятельные разделы. Контент и маршруты задаются централизованно, поэтому языковые версии сохраняют одинаковую структуру.

SEO включено на уровне общего layout: уникальные метаданные, canonical, `hreflang`, Open Graph, Twitter Cards, JSON-LD, `sitemap.xml`, `robots.txt` и постоянные редиректы со старых адресов.

## Подключение формы

Основной бесплатный канал — Cloudflare Email Routing: домен `esi-pro.by` уже подключён, а `bula.esi@gmail.com` должен быть подтверждён как destination address. Письма отправляются с `forms@esi-pro.by`; API-ключи в коде не требуются. Worker не имеет публичного `workers.dev`-адреса.

Для локального Pages preview резервных каналов скопируйте `.dev.vars.example` в `.dev.vars`. В production добавьте нужные имена как зашифрованные переменные Cloudflare Pages.

### Telegram

```env
TELEGRAM_BOT_TOKEN=123456:bot-token
TELEGRAM_CHAT_ID=-1001234567890
```

Бот должен быть добавлен в нужный чат/канал и иметь право публиковать сообщения. Токен нельзя помещать в код сайта, репозиторий или переменные, доступные браузеру.

### Email через Resend

```env
RESEND_API_KEY=re_...
CONTACT_EMAIL=team@example.by
CONTACT_FROM_EMAIL=ESIpro <forms@example.by>
```

`CONTACT_FROM_EMAIL` должен быть подтверждён в Resend. При включении нескольких каналов заявка отправляется по каждому из них. Если ни один канал не настроен, форма честно сообщает посетителю номер телефона вместо имитации отправки.

## Структура

- `src/data/` — типизированные переводы, оборудование, объекты, отзывы и маршруты.
- `src/components/pages/` — компоненты отдельных типов страниц.
- `src/layouts/SiteLayout.astro` — общий каркас, метаданные и структурированные данные.
- `src/pages/[locale]/[...slug].astro` — генерация локализованных страниц.
- `functions/api/contact.ts` — Cloudflare Pages Function с валидацией, honeypot и ограничением частоты.
- `src/styles/` — дизайн-токены, базовые и страничные стили.
- `public/images/` — оптимизированные изображения каталога, объектов, отзывов и документов.

Подробные требования и принятые решения зафиксированы в `REDESIGN_PLAN.md`.
