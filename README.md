# Mynx — сайт-презентация

Лендинг продукта Mynx — офлайн менеджера паролей для Windows.
Next.js 15 (App Router) + TypeScript + Tailwind CSS + PostgreSQL (Drizzle ORM).

## Запуск

```bash
npm install
npm run dev
# http://localhost:3000
```

## База данных

Нужен PostgreSQL. Быстрый вариант через Docker:

```bash
docker run --name mynx-postgres -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=mynx_site -p 5432:5432 -d postgres:16
```

Создайте `.env` из `.env.example`:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mynx_site
```

Примените миграции:

```bash
npm run db:migrate
```

Полезные команды:

- `npm run db:generate` — сгенерировать миграции из `src/db/schema.ts`
- `npm run db:studio` — Drizzle Studio (просмотр данных)

## Структура

- `src/app/page.tsx` — лендинг (статический пререндер)
- `src/app/api/lead/route.ts` — приём заявок «ранний доступ» (zod-валидация, запись в `leads`)
- `src/db/schema.ts` — таблицы `leads`, `subscribers`, `site_events`
- `drizzle/` — SQL-миграции
- `public/` — логотип и промо-изображения

Без поднятой БД лендинг работает полностью; форма вернёт ошибку «попробуйте позже».
