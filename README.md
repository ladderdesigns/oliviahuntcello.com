# oliviahuntcello.com

The personal website of [Olivia Hunt](https://oliviahuntcello.com), a Los Angeles–based cellist and teacher. The site covers her biography and experience, private lessons, event bookings, a gallery of performance videos, and contact forms.

Live site: **[oliviahuntcello.com](https://oliviahuntcello.com)**

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) with React 19
- [Tailwind CSS 4](https://tailwindcss.com) with the typography plugin
- [MDX](https://mdxjs.com) for long-form writing (`src/app/writing`)
- [Netlify](https://www.netlify.com) for hosting and [Netlify Forms](https://docs.netlify.com/forms/setup/) for inquiries

The design is based on the [Spotlight](https://tailwindui.com/templates/spotlight) template from Tailwind UI.

## Getting started

Requires Node.js 20.19 or later (Netlify builds with Node 22, pinned in `.nvmrc` and `netlify.toml`).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script           | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start the local development server |
| `npm run build`  | Create a production build          |
| `npm run start`  | Serve the production build locally |
| `npm run lint`   | Run ESLint                         |
| `npm run format` | Format the codebase with Prettier  |

### Environment variables

| Variable               | Description                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site, used for metadata and the RSS feed. Defaults to `https://oliviahuntcello.com`. |

## Project structure

```
public/
  __forms.html        Hidden form definitions that Netlify reads at deploy time
src/
  app/                Routes (home, about, lessons, booking, gallery, contact, writing)
  components/         Shared UI, including the InquiryForm used by every form
  images/             Portraits, photos, and organization logos
  lib/                Helpers for articles and date formatting
```

## Common edits

- **Biography:** `src/app/about/page.jsx` and the preview in `src/app/page.jsx`
- **Orchestral and chamber experience:** the `Resume` component in `src/app/page.jsx`
- **Gallery videos:** the `videos` array in `src/app/gallery/page.jsx` (use the YouTube video ID)
- **Lesson testimonials:** the `testimonials` array in `src/app/lessons/page.jsx`
- **Navigation:** `src/components/Header.jsx` and `src/components/Footer.jsx`

## Forms

The contact, lessons, and booking pages each render an `InquiryForm` (`src/components/InquiryForm.jsx`), which submits to Netlify Forms with `fetch` and then redirects to `/thank-you`.

Netlify only discovers forms from static HTML, so every form and field must also be declared in `public/__forms.html`. If you add, rename, or remove a field, update both places. Otherwise Netlify silently drops that field from submissions.

| Form name                 | Page       |
| ------------------------- | ---------- |
| `general-contact-inquiry` | `/contact` |
| `private-lesson-inquiry`  | `/lessons` |
| `private-booking-inquiry` | `/booking` |

Submissions only reach Netlify on a deployed site. In local development, the form logs the submission to the browser console and goes straight to the thank-you page.

Submissions and email notifications are managed in the Netlify dashboard under **Forms**.

## Deployment

The site deploys to Netlify automatically when changes are pushed to `main`. Build settings live in `netlify.toml`. The [Netlify Next.js runtime](https://docs.netlify.com/frameworks/next-js/overview/) (`@netlify/plugin-nextjs` v5) is installed as a dev dependency, so its version is controlled by `package.json` rather than the Netlify dashboard.

To reproduce a Netlify build locally, run `npx netlify-cli build` after `netlify link`.

## License

The site is built on a commercial Tailwind UI template and is licensed under the [Tailwind UI license](https://tailwindui.com/license). See [LICENSE.md](LICENSE.md). Site content and images are © Olivia Hunt.
