# MISUN Academy / ESUN POINT Client

## Tech Stack
- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, Framer Motion
- **State:** Redux Toolkit Query (server state), React Hook Form + Zod (forms)
- **Auth:** Better Auth (email/password + Google OAuth)
- **Images:** next/image with Cloudinary remotePatterns

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
- Do not put data files in `public/`.

### API
- RTK Query endpoints in `src/redux/api/`.
- Base API config in `src/redux/api/baseApi.ts`.

### Accessibility
- All `<Image>` must have non-empty `alt` text (or `role="presentation"` if decorative).
- Icon-only buttons must have `aria-label`.
- Clickable divs need `role="button"`, `tabIndex`, and keyboard handlers.

### Code Style
- No comments in production code.
- Named exports preferred; default exports only for pages.
- Inline SVGs repeated 3+ times → extract to `Decorative.tsx`.

## Commands
- `pnpm run dev` — dev server (`next dev --turbopack`)
- `pnpm run build` — build (generates feedback data, then builds)
- `pnpm run lint` — ESLint
- `pnpm run typecheck` — type check (`tsc --noEmit`)
- Root: `pnpm dev` runs all 3 apps via Turborepo

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
