# Wellspring Chaplaincy (Next.js + Cloudflare Pages)

## Prerequisites
- Node 20+
- GitHub repository
- (Optional) Resend API key for contact form

## Local Development
```bash
npm i
npm run dev
```

## Environment Variables

Create `.env.production` (and optionally `.env.local`):

```
RESEND_API_KEY=xxxxxxxxxxxxxxxx
CONTACT_TO=jen@wellspringchaplain.com
CONTACT_FROM=site@wellspringchaplain.com
```

## Deploy to Cloudflare Pages

1. Push to GitHub.
2. In Cloudflare Pages:
   * Create project → Connect GitHub repo.
   * Framework preset: **Next.js**.
   * Build command: `npm run build`
   * Output directory: auto-detected (Next.js on Cloudflare). If prompted, use `.vercel/output/static`.
   * Add environment variables above.
3. Deploy.

## SEO & Analytics

* Update `metadata` in `app/layout.tsx`.
* Add favicons under `/public`.
* Add Cloudflare Web Analytics or your preferred tool.

## Content Workflow

* Blog: convert `app/(site)/blog/page.tsx` to MDX routes or connect a headless CMS.
* Resources: start with static links; upgrade to CMS later.
* Events: extend `lib/events.ts` or replace with CMS/Google Sheet.

## Testing

```bash
npm run build && npm start
```
