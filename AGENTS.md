# MISUN Academy / ESUN POINT Client

## Tech Stack
- **Framework:** Next.js 16, React 19, TypeScript (`cacheComponents`, React Compiler, Turbopack root `../`).
- **Styling:** Tailwind CSS 3 + shadcn/ui (new-york, neutral, CSS vars), Framer Motion, Lenis smooth scroll.
- **State:** Redux Toolkit Query only (`src/redux/store.ts` holds just `baseApi`); React Hook Form + Zod.
- **Auth:** Better Auth — no local server. Client `src/lib/auth-client.ts` points at `{BASE_API}/auth`; login/signup/Google redirect to MA frontend (`src/lib/auth-urls.ts`).
- **Images:** `next/image` (avif/webp, qualities 65/75) with remotePatterns: Cloudinary, `lh3.googleusercontent.com`, `securepay.sslcommerz.com`.
- **Analytics/SEO:** Meta Pixel + CAPI (`/api/meta-conversion`), GA, Vercel Analytics, JSON-LD, `next-sitemap`.

## Structure
- `src/app/(WithCommonLayout)/` — `/, /courses, /about, /feedback, /checkout?course=<slug>, /payment?status=, /privacy-policy, /refund-policy, /terms-and-conditions, /maintenance`. Root `layout.tsx` owns fonts (`Hind_Siliguri`), metadata, Pixel/GA scripts, JSON-LD, `Providers`+`LenisProvider`.
- `src/app/api/meta-conversion/route.ts` — zod `{eventName,email,value,currency,eventId}` → SHA256 email → Meta Graph v18 CAPI.
- `src/components/module/{home,course/english,checkout,payment,chat,testimonial}/` — feature UI. `shared/` — `Decorative`, `ProtectedRoute`, `PopupBannerModal`, `FloatingChat`. `layout/` — Navbar/Footer shell. `ui/` — shadcn primitives.
- `src/redux/api/` — `baseApi.ts` (baseUrl `NEXT_PUBLIC_BASE_API_URL`, `credentials:include`, X-CSRF-Token, 401→signOut+redirect, 403/404→toast) + `batchApi`, `courseApi`, `enrollmentApi`, `settingsApi`.
- `src/hooks/` — `useAuth` (read-only session via `GET /auth/me`), `useEnrollment` (RHF+zod 2-step checkout), `useCurrentBatch` (default slug `english-for-professional-communication`), `useChat` (`POST /chat`), `usePosterGenerator`, `useCountUp`, `useLenisScrollTo`.
- `src/lib/` — `auth-client`, `auth-server-api` (`/auth/server/*` wrapper), `auth-urls` (cross-app links), `auth-errors`, `generateMetadata`, `metaPixel`, `date-utils` (`isWindowOpen`), `utils` (`cn`).
- `src/constants/` — `courseCurriculum`, `whyUs`, `posterTemplates`, `enrollment` (manual PhonePe info), `studentFeedbacks` (generated — never hand-edit).
- `src/proxy.ts` — maintenance gate (`GET /settings → maintenanceEnabled`) + `/checkout` session guard → `{MA}/auth/login?redirect_url=...`. Matcher: `/,/checkout/*,/courses,/about`.

## Conventions

### File Length
- Keep files under **150 lines**. Extract hooks into `src/hooks/` and sub-components into co-located files.

### Components
- **Server-first.** Only add `"use client"` when you use hooks, browser APIs, or event handlers.
- One component per file, named exports for non-page components.
- Sub-components go alongside their parent (e.g., `checkout/BatchInfoCard.tsx` next to `checkout/EnrollmentCheckout.tsx`).

### Hooks
- Custom hooks go in `src/hooks/` (e.g., `useEnrollment.ts`, `useChat.ts`).
- Hooks receive state+setState as parameters when extracted from a parent component.

### Decorative Patterns
- Use shared components from `src/components/shared/Decorative.tsx`:
  - `<DotGrid />`, `<AmbientGlow />`, `<SectionBorder />`, `<CornerAccent />`, `<Divider />`, `<SpinnerIcon />`
- Do not inline radial-gradients, blur blobs, or gradient borders directly.

### Data
- Static/constant data goes in `src/constants/` (e.g., `courseCurriculum.ts`, `studentFeedbacks.ts`).
- Do not put data files in `public/`. Never hand-edit `studentFeedbacks.ts` — edit `src/data/student_feedback.csv` and run `generate:feedbacks`.

### API
- RTK Query endpoints in `src/redux/api/`.
- Base API config in `src/redux/api/baseApi.ts`.
- All requests `credentials: "include"`. New endpoints must use `baseApi.injectEndpoints` with existing tagTypes (`Batches`, `Courses`, `CourseEnrollments`, `Settings`, ...).
- Auth calls go through `authServerApi`/`auth-client`, never raw fetch to `/auth`.

### Auth & Cross-App
- This app has no `/auth` or `/dashboard` pages. Use `getLoginHref/getDashboardHref/getMyClassesHref` from `lib/auth-urls.ts`; never hardcode MA URLs.
- Protect pages with `proxy.ts` matcher + `ProtectedRoute` fallback. Roles: `learner` vs `instructor|admin|superadmin|employee`.

### Accessibility
- All `<Image>` must have non-empty `alt` text (or `role="presentation"` if decorative).
- Icon-only buttons must have `aria-label`.
- Clickable divs need `role="button"`, `tabIndex`, and keyboard handlers.

### Code Style
- No comments in production code.
- Named exports preferred; default exports only for pages.
- Inline SVGs repeated 3+ times → extract to `Decorative.tsx`.

## Env
- Required: `NEXT_PUBLIC_BASE_API_URL`, `NEXT_PUBLIC_MA_FRONTEND_URL`, `NEXT_PUBLIC_APP_URL|AUTH_URL|SITE_URL`. Optional: `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`, `META_PIXEL_ID`+`META_CAPI_TOKEN`, `NEXT_PUBLIC_GA_ID`. See `.env.example`.

## Commands
- `pnpm run dev` — dev server (`next dev --turbopack -p 3001`)
- `pnpm run build` — build (regenerates feedbacks via `scripts/generateStudentFeedbacks.ts`, then builds)
- `pnpm run generate:feedbacks` — regenerate testimonials from CSV
- `pnpm run lint` — ESLint
- `pnpm run typecheck` — type check (`tsc --noEmit`)
- `pnpm start` — serve prod on 3001
- Root: `pnpm dev` runs all 3 apps via Turborepo

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
