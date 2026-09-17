# Alexander Jerschow — academic website

This is the source for Alexander Jerschow's personal academic website. It is a
fully static site: the text, design, photograph, and first-party PDF documents
are stored in this repository, with no Framer runtime or Framer-hosted assets.

## Run it locally

Install Node.js 22.13 or newer, then run:

```bash
npm ci
npm run dev
```

Open the local address printed in the terminal. To make the production files:

```bash
npm run build
```

The deployable site is written to `dist/client`.

## Where the content lives

- Homepage: `app/page.tsx`
- Shared navigation and page components: `app/site.tsx`
- Works, wiki, teaching, thesis, and CV pages: their folders under `app/`
- Styling: `app/globals.css`
- Photograph: `public/images/`
- PDFs: `public/documents/`

The older German, Russian, and Japanese URLs are retained through
`app/[slug]/page.tsx`, so previously shared links continue to resolve.

## Publish with GitHub Pages

GitHub Pages is free for a public repository and supports custom domains and
HTTPS. The included workflow at `.github/workflows/pages.yml` builds and
publishes the site automatically.

1. Create a public GitHub repository named `Jerschow.github.io`.
2. Put this source in the repository and push the `main` branch.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as
   the source.
4. The site will appear at `https://jerschow.github.io` after the first workflow
   finishes.

Using the `Jerschow.github.io` repository name matters because this site uses
root-relative links. A custom domain also serves it from the root and works as
expected.

## Add a custom domain

Register the domain in your own account at any registrar. In GitHub, enter it
under **Settings → Pages → Custom domain**. GitHub will show the DNS records to
add at the registrar. Enable **Enforce HTTPS** once GitHub has verified the DNS.

Keep domain registration and hosting separate: if you later move from GitHub
Pages to another static host, the source stays the same and only the DNS records
need to change.

## Cloudflare Pages alternative

Connect the repository to Cloudflare Pages and use:

- Build command: `npm run build`
- Output directory: `dist/client`

Cloudflare Pages can then attach the same custom domain. No paid hosting plan is
needed for a site of this size.
