---
name: Modern Luxury Commerce
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#111c2d'
  on-tertiary-container: '#79849a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  price-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  price-card:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  margin: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a high-performance, minimalist luxury shopping experience balancing the clinical discipline of high-end consumer technology with the kinetic energy of premier athletic apparel. It caters to discerning digital consumers seeking refined craft, effortless navigation, and immediate responsiveness.

The aesthetic philosophy centers on:
- **Radical Reduction:** Products are framed as hero artifacts. Layouts eliminate decorative ornamentation in favor of structural whitespace, deliberate alignment, and tactile micro-interactions.
- **Precision Engineering:** High-contrast text, razor-sharp 1px neutral framing, and intentional motion evoke authority, speed, and premium build quality.
- **Effortless Transactionality:** Interactions—from rapid cart flyouts to variant selectors—provide instant feedback, transparent sizing indicators, and low-friction checkout pathways that establish deep brand trust.

## Colors

The palette is engineered around high luminance contrast, using sterile whites, muted foundational surfaces, and architectural slate anchors.

- **Primary Canvas & Surfaces:** Canvas foundation utilizes `#FFFFFF` for primary product displays, offset by secondary containment zones in `#FAFAFA` and `#F8FAFC`.
- **Primary Ink & CTAs (`#0F172A`):** Deep Slate serves as the default ink for maximum legibility and drives primary interactive triggers (Buy Now, Proceed to Checkout, Hero Badges).
- **Accent Indigo (`#4F46E5`):** Reserved for directional indicators, state highlights, promotional micro-tags, active variant pills, and critical conversion milestones.
- **Secondary Slate (`#1E293B`):** Employed for elevated toolbars, sticky mobile transaction docks, and secondary actionable controls.
- **Structural Borders & Dividers (`#E2E8F0`):** Ultra-subtle framing separating dense specifications, SKU grids, and cart line items without visual weight.
- **Support & Feedback:**
  - Success / In-Stock: `#059669` (Emerald 600)
  - Critical / Low Stock: `#E11D48` (Rose 600)
  - Warning / Allocation: `#D97706` (Amber 600)

## Typography

The typographic architecture balances technical clarity with sculptural brand presence.

- **Headlines (Plus Jakarta Sans):** Modern geometric architecture with clean curves and tight kerning delivers visual punch across collection launches and product nomenclature.
- **Body & Numerical Values (Inter):** Maximum legibility for spec sheets, inventory disclaimers, checkout inputs, and monetary values. Tabular numbers (`tnum`) must be enforced for prices, SKU counts, and quantity steppers to ensure layout stability during rapid updates.
- **Hierarchy Rules:**
  - Category breadcrumbs and promotional tags must strictly render in `label-caps` with uppercase transformations.
  - Price displays pair an optical baseline alignment with associated discount strikes (`line-through text-slate-400`).

## Layout & Spacing

The layout is built on a responsive 12-column grid capped at a max-width container of `1440px`.

- **Breakpoints:**
  - Mobile (`< 768px`): 4 columns, `1rem` margins, single-column product detail stacks with fixed bottom transactional sheet.
  - Tablet (`768px – 1024px`): 8 columns, `1.5rem` margins, 2-column catalog grids.
  - Desktop (`> 1024px`): 12 columns, `3rem` margins, alternating split-screen sticky media galleries with unconstrained vertical spec scrolling.
- **Rhythm & Grid Alignment:**
  - Product Grids: 3-column (`col-span-4`) or 4-column (`col-span-3`) displays with uniform vertical gaps matching column gutters.
  - Generous negative space surrounding primary hero compositions (`space-xl` and above) ensures imagery commands focus before transactional panels enter view.

## Elevation & Depth

Visual depth is achieved through structural layering, ambient illumination, and low-contrast borders rather than heavy drop shadows.

- **Level 0 (Flat):** Primary canvas `#FFFFFF` and inset modules `#FAFAFA` framed with a 1px border of `#E2E8F0`.
- **Level 1 (Card Hover / Hover Affordance):** Subtle ambient lift with an ultra-soft footprint:
  `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02);`
- **Level 2 (Dropdowns / Quick-Add Triggers):**
  `box-shadow: 0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03);`
  Framed by a 1px border of `#CBD5E1`.
- **Level 3 (Slide-Over Cart Drawer & Checkouts):** Maximum elevated surface paired with an ambient backdrop overlay (`rgba(15, 23, 42, 0.4)` with `backdrop-filter: blur(8px)`):
  `box-shadow: -16px 0 48px rgba(15, 23, 42, 0.12);`

## Shapes

The design uses a clean 8px (`rounded-md` / `0.5rem`) base radius across all core visual modules to maintain an architectural, engineered silhouette.

- **Standard Components (0.5rem / 8px):** Applied to buttons, card containers, form fields, discount chips, and sticky utility bars.
- **Sub-components (0.375rem / 6px):** Nested inner elements, swatches, quantity increments, and mini trust badges.
- **Pill Archetype (9999px):** Strictly constrained to dynamic status chips (e.g., "New Arrival", "Limited Release") and floating mobile navigation anchors.

## Components

### 1. Primary & Secondary Buttons
- **Primary Action (Add to Cart / Complete Order):** Solid `#0F172A` background, pure white text, 8px radius, height 48px (52px on mobile touch targets). Hover transitions smoothly to `#1E293B` with micro-scale (`scale-[1.01]`). Loading state triggers an inline SVG spinner without collapsing element boundaries.
- **Secondary Action (Express Checkout / Fast View):** Surface `#FAFAFA`, border 1px `#E2E8F0`, text `#0F172A`. Hover transitions to `#FFFFFF` with `#CBD5E1` border and subtle ambient elevation.
- **Accent Dynamic (Indigo Accent):** `#4F46E5` background with white text, exclusively deployed for highlighted promotion calls, checkout badges, or VIP incentives.

### 2. Product Cards
- **Structure:** Clean 1:1 or 4:5 aspect ratio image wrapper framed by a `#FAFAFA` container with 1px `#E2E8F0` borders. Image utilizes seamless fade-in hover swap to secondary angles.
- **Meta Hierarchy:** Top-aligned category label in `label-caps` (`#64748B`), product name in `headline-sm`, and tabular price block.
- **Micro-Actions:** Quick-add pill revealed on bottom desktop hover; persistently anchored on touch screens.

### 3. Product Detail Page (PDP) Options & Swatches
- **Color Swatches:** 32px circular buttons bounded by a 2px offset border. Active state features a 2px `#0F172A` outer ring separated by 2px white negative space. Unavailable variants show an angled strike-through line.
- **Size Selectors:** 44px uniform square pills with 8px radius. Active state fills with `#0F172A` text `#FFFFFF`. Out-of-stock items feature low opacity (`opacity-40`) and disabled pointer events accompanied by a "Notify Me" trigger.

### 4. Slide-Out Cart Drawer
- **Dimensions:** 440px wide right-docked drawer with `Level 3` elevation and blurred backdrop.
- **Line Items:** Compact 72px thumbnail, title, selected variant chips, dynamic quantity stepper (`-`, input, `+`), and instant trash removal.
- **Footer Checkout Module:** Subtotal summary, free shipping progression bar with filled Indigo indicator, and primary full-width checkout trigger.

### 5. Input Fields & Form Controls
- **Inputs:** 44px height, `#FFFFFF` background, 1px `#E2E8F0` border, 8px radius. Active focus transitions border to `#0F172A` with an ambient ring (`ring-1 ring-slate-900`). Error states show 1px `#E11D48` border with trailing micro-copy.
- **Checkboxes & Radios:** 18px rounded controls using `#0F172A` fill and white check icons on active toggle.

### 6. Trust Badges & Guarantees
- Encapsulated containers in `#FAFAFA` with 1px `#E2E8F0` borders. Icons render in 16px geometric lines accompanied by `label-md` copy (e.g., "Carbon Neutral Shipping", "Authenticity Guaranteed", "30-Day Bespoke Returns").