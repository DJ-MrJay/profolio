# Jonah Wambua Portfolio Design System

Source: UI UX Pro Max design-system query for "Next.js portfolio website for a full-stack developer, UI/UX designer, graphic designer, motion-driven storytelling-driven personal brand".

## Design Direction

Jonah Wambua Portfolio uses a professional, premium, design-led engineering direction. The site should feel like a guided personal brand narrative rather than a generic project gallery.

The UI UX Pro Max recommendation is:

- Pattern: Horizontal Scroll Journey.
- Primary adaptation: keep the current vertical section architecture, but treat each section as a chapter in a scroll-triggered story.
- Style: Motion-Driven.
- Best-fit use cases: portfolio sites, storytelling platforms, interactive experiences, creative SaaS.
- Key effects: scroll reveal, entrance motion, parallax layers, section transitions, and hover micro-interactions.
- Required constraint: respect `prefers-reduced-motion`.

## Narrative Model

The homepage should follow this order:

1. Hero: name, location, clear positioning, and an immediate path to work/contact.
2. Intro/About: personal story, credibility, operating values, and craft range.
3. Work: case-study style project cards with role, outcome, stack, and preview.
4. Articles: editorial proof of thinking and learning in public.
5. Contact: direct conversion with low-friction form and contact alternatives.

## Color System

UI UX Pro Max recommended a monochrome foundation with blue accent:

| Role | Hex | CSS Variable |
| --- | --- | --- |
| Primary | `#18181B` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#3F3F46` | `--color-secondary` |
| Accent/CTA | `#2563EB` | `--color-accent` |
| Background | `#FAFAFA` | `--color-background` |
| Foreground | `#09090B` | `--color-foreground` |
| Muted | `#E8ECF0` | `--color-muted` |
| Border | `#E4E4E7` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#18181B` | `--color-ring` |

Implementation mapping:

- Use neutral surfaces so project imagery and writing carry the content.
- Use blue as the primary CTA and focus accent.
- Preserve a small amount of Jonah's existing brand warmth only as a supporting brand note, not as the dominant CTA color.
- Avoid purple/pink AI-style gradients, decorative blobs, and low-contrast gray text.
- Dark mode should be deep neutral, readable, and slightly elevated by borders rather than glow-heavy effects.

## Typography

UI UX Pro Max recommendation:

- Heading: Archivo.
- Body: Space Grotesk.
- Mood: minimal, portfolio, designer, creative, clean, artistic.

Implementation rule:

- Preserve the existing local Walsheim heading asset as the brand heading face.
- Use a clean geometric/system body stack that supports the Space Grotesk recommendation without adding fragile runtime font loading.
- Keep letter spacing at `0` for normal text. Uppercase labels may use controlled positive tracking.
- Keep long copy readable with constrained measure.

## Motion System

Motion should support the story without becoming the story.

Use:

- Scroll reveal for section headers, body copy, cards, and article rows.
- Hero entrance animation for the main positioning statement.
- Subtle parallax on the hero portrait and small visual rails only where it does not affect layout.
- Hover/press micro-interactions for links, buttons, cards, and navigation.
- Section transitions through borders, background shifts, sticky chapter labels, and measured spacing.

Avoid:

- Scroll-jacking.
- Infinite noisy animations.
- Bounce effects.
- Motion on every object in a viewport.
- Animations that leave content hidden when motion is reduced.

Timing:

- Entrance and scroll reveal: 300-400ms.
- Hover states: 150-220ms.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` or Framer Motion ease-out equivalents.

## Accessibility Rules

- Respect `prefers-reduced-motion` in CSS and Framer Motion usage.
- Keep visible focus states on all links, buttons, form controls, and icon buttons.
- Maintain at least 4.5:1 contrast for normal text and 3:1 for large text or non-text UI.
- Keep touch targets at least 44px high/wide.
- Preserve semantic headings in page order.
- Ensure form errors are connected with `aria-describedby`.
- Social links must use vector brand icons, not emojis.

## Responsive Rules

Target widths:

- 375px: one-column content, stable hero copy, no overlapping portrait.
- 768px: two-column opportunities where content remains readable.
- 1024px: stronger chapter structure and richer work hierarchy.
- 1440px: wide layout with generous whitespace and constrained reading measure.

Use stable dimensions for cards, images, controls, and scrollers to avoid cumulative layout shift.

## Stack Rules

Current stack:

- Next.js App Router.
- TypeScript.
- Tailwind CSS v4 through `src/app/globals.css`.
- Framer Motion and Motion already installed.
- next-themes for dark mode.
- Next Image for portfolio imagery.

Do not add new dependencies for this pass. Prefer small focused components and shared helpers.

## Pre-Delivery Checklist

- No emoji icons.
- Font Awesome-style brand SVG icons for social links.
- Scroll reveals and parallax disabled or simplified for reduced motion.
- Focus states visible.
- Light and dark themes polished.
- Layout verified at 375px, 768px, 1024px, and 1440px.
- `npm run lint` and `npm run build` attempted with results recorded.
