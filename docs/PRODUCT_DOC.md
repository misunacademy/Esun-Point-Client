# ESUN POINT Client — Product Documentation

## 1. Overview
- **Product:** ESUN POINT (`@misun/esun-point-client`) — public marketing + enrollment frontend for MISUN Academy's English program.
- **Flagship offering:** `english-for-professional-communication` — cohort/batch-based spoken-English course.
- **Sister app:** MA frontend (`NEXT_PUBLIC_MA_FRONTEND_URL`, port 3000) owns auth pages, dashboards, my-classes, certificates. This app (port 3001) owns marketing, checkout, payment status, feedback.
- **Backend:** External REST API at `NEXT_PUBLIC_BASE_API_URL` (`/api/v1`). No local DB. Auth is Better Auth hosted on the backend.

## 2. Users & Roles
- **Visitor (anonymous):** browse home, courses, about, feedback, legal pages. Cannot access `/checkout`.
- **Learner:** enrolls, pays, then studies on MA frontend (`/my-classes`). Role `learner`.
- **Staff (`instructor|admin|superadmin|employee`):** no admin UI here; redirected to MA ` /dashboard/<segment>` via `lib/auth-urls.ts`.
- Auth is read-only here: login/signup/Google all redirect to `{MA}/auth/login?redirect_url=<ep-url>`. Session read via `GET /auth/me`; logout via `POST /auth/server/sign-out`.

## 3. Routes
| Route | Purpose |
|---|---|
| `/` | Home: hero, ProfessionalEnglish, WhyUs, enrollment CTA |
| `/courses` | Course listing + `EnglishCourseDetails` |
| `/about` | Story, mission, team, CTA sections |
| `/feedback` | Testimonials from generated `studentFeedbacks` (CSV → build script) |
| `/checkout?course=<slug>` | Protected 2-step enrollment (batch + payment method) |
| `/payment?status=success\|pending\|review\|failed` | Payment result + `Congratulations` + poster generator |
| `/privacy-policy`, `/refund-policy`, `/terms-and-conditions` | Legal |
| `/maintenance` | Maintenance redirect target (settings-driven) |
| `POST /api/meta-conversion` | Server-side Meta CAPI proxy (Purchase events) |

## 4. Core Journeys
- **Browse → Enroll:** home/courses → CTA → `/checkout?course=<slug>` → `useCurrentBatch` resolves `current-enrollment` batch (fallback `upcoming[0]`) → if window closed (`isWindowOpen`), show `EnrollmentNotStartedDialog`.
- **Pay (SSLCommerz):** select batch + `SSLCommerz` → `POST /enrollments {batchId}` → `paymentUrl` → external redirect → return to `/payment?status=`.
- **Pay (manual/phonePay):** step 2 `ManualPaymentForm {senderNumber, transactionId}` → `POST /enrollments/manual` → `/`. Price from `batch.price|manualPaymentPrice` (fallback 3000 BDT).
- **Tracking:** browser `fbq Purchase` + server CAPI via `/api/meta-conversion` (SHA256 email, `META_PIXEL_ID`/`META_CAPI_TOKEN`).
- **Feedback:** build-time `scripts/generateStudentFeedbacks.ts` converts `src/data/student_feedback.csv` → `src/constants/studentFeedbacks.ts`. `pnpm build` always regenerates.
- **Help:** `FloatingChat` ("Sun" AI widget) → `POST {BASE_API}/chat {messages}` → `{reply}`.

## 5. Domain Model
- **Course:** `{slug, title, curriculum}`. Public reads: `getAllCourses`, `getCourseBySlug`, `getCourseById`, `getCourseCurriculum`. Static fallback `constants/courseCurriculum.ts`.
- **Batch (source of truth):** `{title, batchNumber, courseId, enrollmentStart/End, start/end, maxCapacity, currentEnrollment, status: draft|upcoming|running|completed, price, manualPaymentPrice, isPublished}`. Endpoints: `getAllBatches`, `getUpcomingBatches`, `getCurrentEnrollmentBatch(?courseId)`, `getBatchById`.
- **Enrollment:** `initiateEnrollment`, `enrollStudentManual`, `getMyEnrollments`, `getEnrollmentDetails`, admin `getAllEnrollments/updateEnrollmentStatus`.
- **Settings (remote CMS-lite):** `GET /settings` → `{popupEnabled, popupImageUrl, popupLink, maintenanceEnabled, ma/epFacebook/WhatsappGroupLink, homeWhyVideoUrl, paymentTutorialVideoUrl}`. Drives `PopupBannerModal` + maintenance gate.

## 6. Guards & Edge Behavior
- `src/proxy.ts` (matcher `/,/checkout/*,/courses,/about`): fetches `{BASE_API}/settings` → `maintenanceEnabled` redirects to `/maintenance`; `/checkout*` without Better Auth session cookie redirects to `{MA}/auth/login?redirect_url=...`.
- Client fallback `components/shared/ProtectedRoute.tsx` enforces same flow + `requiredRoles`.
- `baseApi` 401 → sign out + toast + redirect to login; 403/404 → toast.

## 7. Integrations
- **Payments:** SSLCommerz (online) + manual phonePay (`constants/enrollment.ts`: +91 9123944746, INR 2000 — verify before use).
- **Analytics:** Meta Pixel (browser) + CAPI (server), Google Analytics (`NEXT_PUBLIC_GA_ID`), Vercel Analytics.
- **Images:** `next/image` (avif/webp) — Cloudinary, Google avatars, SSLCommerz.
- **SEO:** per-page `generateMetadata`, Course/Breadcrumb JSON-LD, dynamic `sitemap.xml`/`robots.txt`, `next-sitemap` postbuild.

## 8. Non-Goals (live on MA frontend)
- No `/dashboard`, `/auth`, `/my-classes`, lesson player, progress, certificates, or admin CRUD in this repo.

## 9. Environment
- `NEXT_PUBLIC_BASE_API_URL` — backend (`.../api/v1`).
- `NEXT_PUBLIC_APP_URL|AUTH_URL|SITE_URL` — this app (3001).
- `NEXT_PUBLIC_MA_FRONTEND_URL` (3000), `NEXT_PUBLIC_EP_FRONTEND_URL` (3001) — cross-app links.
- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` + `META_PIXEL_ID`/`META_CAPI_TOKEN` — Meta browser/CAPI.
- `NEXT_PUBLIC_GA_ID` — Google Analytics.

## 10. Operations
- `pnpm run dev` (3001, Turbopack), `pnpm run build` (regenerates feedbacks), `pnpm run lint`, `pnpm run typecheck`, `pnpm start` (3001).
