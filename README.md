<img src="public/knight-logo.svg" alt="John V. Pereira’s chess knight" width="64" />

# vpereira.com

My personal website, with projects, writing, and a little about me. I built the original by hand and keep updating it as my work changes.

[Visit the site](https://vpereira.com)

## Development

Built with Next.js, React, TypeScript, and Tailwind CSS. The contact form uses Resend.

```bash
npm ci
```

For the contact form, add your Resend key to `.env.local`:

```dotenv
RESEND_API_KEY=your_resend_api_key
```

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Editing

- `src/app/about/page.tsx` — bio, experience, research, and education.
- `src/contents/project.ts` — project details.
- `src/contents/blogs.ts` — writing links and excerpts.
- `src/app/components/` — navigation, page sections, and interactions.
- `public/` — photos, logos, and the résumé PDF.

## Checks

```bash
npx eslint src
npm run build
```

Hosted on Vercel through this repository’s GitHub integration.
