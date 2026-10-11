# 🛒 বাজার দর (BazarDor)

বাজার দর is a daily market price tracker for Bangladesh. It shows today's prices of essential goods — rice, lentils, oil, vegetables, fish, meat, eggs, dairy and spices — along with price changes and a market-by-market breakdown.

- Live Link:
- GitHub Repository Link:

## Features

1. **Daily price overview** — top price risers, top fallers and the full product list on the home page, with Bengali numerals and change badges.
2. **Live price ticker** — an infinite scrolling strip below the navbar showing every product's price and change.
3. **Category pages with sorting** — browse products by category and sort by price (low to high / high to low).
4. **Protected product details** — minimum, maximum and average price plus a market-wise price table, available after sign in.
5. **Authentication with Better Auth** — email/password, Google and GitHub sign in, with toast notifications.
6. **Profile management** — view account information and update your name.
7. **Responsive UI** — skeleton loaders, a friendly 404 page, and layouts for mobile, tablet and desktop.

## Technologies

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4 + DaisyUI 5
- Better Auth + MongoDB
- React Hot Toast

## Getting Started

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=
MONGODB_DB=bazar-dor

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

OAuth redirect URLs:

- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/            Routes, layouts, loading and not-found pages
├── components/     Reusable UI grouped by feature (layout, home, product, auth, profile, ui)
├── hooks/          Client hooks
├── lib/            API layer, auth setup, formatters and constants
├── types/          Shared TypeScript types
└── proxy.ts        Route protection for /product and /profile
```
