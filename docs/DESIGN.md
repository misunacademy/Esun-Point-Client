# ESUN POINT — Design System

## 1. Brand
- Blue-led dark theme. Primary `#3b82f6` (blue-500, `217 91% 60%`), hover `#2563eb`, glow `217 85% 75%`.
- Surfaces: near-black `#040a07` (navbar), `#060f0a` / `#060a12` (footer), `#101828` (secondary buttons).
- Accent green `hsl(115,96%,33%)` only inside `creative` gradient. Text white / `white/40` muted.
- CTAs always blue gradient `from-blue-700 via-blue-500 to-blue-600`. Borders/dividers `blue-500/20` or `primary/25`.

## 2. Typography
- **Mona Sans** (body, `font-mona`) + **Mona Sans Expanded** (`font-monaExpanded`) via `@font-face` (`/fonts/*.woff2`, 400/700).
- **Hind Siliguri** for Bengali (`--font-bangla`, `font-bangla`) via `next/font/google`, weights 400–700.
- Scale: `.h1 clamp(2rem,5vw,3rem)`, `.h2 clamp(1.8rem,5vw,2rem)`. Nav links `text-xs font-bold tracking-wide`.

## 3. Tokens (Tailwind 3 + shadcn new-york, neutral, CSS vars)
- Colors map to HSL vars: `background/foreground/card/popover/primary(+glow)/secondary/muted/accent/destructive/border/input/ring/chart-1..5/sidebar-*`.
- Radius `--radius: 0.5rem` (`lg` / `md -2px` / `sm -4px`).
- Vars: `--gradient-primary` (primary→glow), `--gradient-creative` (primary→accent→green), `--gradient-glow` (radial), `--shadow-creative`, `--shadow-glow`, `--transition-smooth 0.4s`.
- Keyframes: `accordion-down/up 0.2s, float 3s, glow 2s, shimmer 3s, draw 5s, zoom-in-out 8s, spin-slow 4s`.

## 4. Decorative System (mandatory)
- Never inline radial-gradients, blur blobs, or gradient borders. Use `src/components/shared/Decorative.tsx`:
- `DotGrid` — 32px `radial-gradient(#3b82f6 1px, transparent)` grid at `opacity-[0.03]`.
- `AmbientGlow` — `bg-blue-500/10 w-[500px] h-[500px] blur-[120px] rounded-full absolute`.
- `SectionBorder` — 1px `from-transparent via-blue-500/40 to-transparent`, top/bottom/both.
- `CornerAccent` — paired `border-primary/40` L-corners. `Divider` — `via-primary/25` hairline. `SpinnerIcon` — white spin SVG.
- Extra: `.glow-border-horizontal/vertical::after` (2px blue + glow, 2s alternate), `.radial/linear-image-mask`, `.nav-mask-bg/{sm,md,lg}`, float/shimmer utilities, blue thin scrollbar.

## 5. Components (shadcn + custom)
- Stock Radix primitives: dialog, alert-dialog, drawer, dropdown-menu, form, input, label, carousel, collapsible, separator, skeleton, tooltip, alert, card.
- `button` variants: `default` (primary + lift + shadow), `outline` (primary text/border), `secondary` (#101828), `ghost/link/destructive`, `creative` (primary→glow gradient, `px-8 py-6 rounded-xl`, hover lift + scale).
- Motion wrappers: `FadeIn` (in-view once, ±40px, 0.5s), `StaggerContainer` (0.1s stagger). Layout: `container mx-auto`.
- Feedback: `sonner` Toaster styled to theme tokens.

## 6. Layout Shell
- `CommonLayoutShell`: `grid [auto,1fr,auto] min-h-screen` → `PopupBannerModal` + `Navbar` + `main` + `Footer`.
- Navbar: fixed `z-[999] bg-[#040a07] backdrop-blur-xl border-b blue-500/20`, `h-16 max-w-7xl`, logo `esun-logo.svg`, underline hover (`blue-500→blue-400`), `AnimatedEnrollButton` (conic spinning border + sheen, fires `InitiateCheckout`) + `UserDropdownMenu`. Mobile: `MobileNavbar` dropdown panel.
- Footer: `bg-[#060f0a]` over `footer.png` + dark gradient overlay + 3 `blue-500/5..8` blobs, 3-column `Brand/Links/Social`, SSLCommerz banner, `white/40` copyright.

## 7. Motion
- Framer Motion for reveals, chat `AnimatePresence`, timeline/curriculum scroll transforms. Lenis smooth scroll (`duration 1.2`, `autoRaf`) via `LenisProvider`; use `useLenisScrollTo` for anchors.
- Fixed dark chrome: `next-themes` installed but no `ThemeProvider` mounted — light vars exist but are unused.

## 8. Imagery
- `next/image` avif/webp, qualities 65/75. Remotes: Cloudinary, Google avatars, SSLCommerz.
- Posters: 1080×1080 canvas (`posterTemplates.ts`): graphic = green/teal neon, english = blue/sky neon; photo circle + name + batch pill.

## 9. Rules
- New decorative CSS → `Decorative.tsx` or `globals.css` utility, never inline. SVG repeated 3+ times → `Decorative.tsx`. Icon-only buttons need `aria-label`; images need `alt`.
