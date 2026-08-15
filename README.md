# Evan / Motion Method

A Vercel-ready personal training website built with Next.js.

## Fastest deployment: Vercel Drop

1. Go to https://vercel.com/drop.
2. Drag the ZIP file onto the page.
3. Confirm that Vercel shows **Next.js** as the detected framework.
4. Select Deploy, then open the exact production URL Vercel provides.

If you use GitHub instead, unzip the package and place its contents at the
repository root. `package.json`, `vercel.json`, and the `app` folder must be at
the top level. Import that repository in Vercel and leave Root Directory empty.

The resulting Vercel site is public and does not require a ChatGPT login.

## Before the public launch

Replace the placeholder consultation email `evan@motionmethod.fit` in
`app/page.tsx` with Evan's real email address. You can also set
`NEXT_PUBLIC_SITE_URL` in Vercel to the final custom domain for exact social
preview URLs; Vercel's own deployment URL is detected automatically otherwise.
