# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**rivet-ui** is a React 19 component library built with TypeScript, Tailwind CSS 4, CVA (Class Variance Authority), and **Base UI** (`@base-ui/react`) as the accessible primitive layer. It publishes ESM-only to npm with full type declarations. The design identity is "artisan modern" — warm, craft-inspired, and intentional.

## Commands

```bash
bun install              # Install dependencies
bun run build            # Build library (Bun.build + tsc declarations + CSS)
bun run dev              # Build in watch mode
bun run storybook        # Start Storybook dev server on port 6006
bun run build-storybook  # Build static Storybook
bun run typecheck        # Type-check without emitting (tsc --noEmit)
bun test                 # Run tests via Vitest + Storybook addon
```

## Architecture

### Component Pattern

Each component lives in `src/components/<Name>/` with three files:

- `<Name>.tsx` — implementation
- `<Name>.stories.tsx` — Storybook stories with interactive `play` tests
- `index.ts` — barrel export (`export { Component, componentVariants } from './Component'`)

Components follow these conventions:

- **Base UI primitives** are the root element where available. Use the namespace subpath import: `import { Slider } from '@base-ui/react/slider'` then access `Slider.Root`, `Slider.Track`, etc. Components without a Base UI equivalent (Alert, Badge, Card) use plain HTML elements.
- **Context constraint**: All Base UI sub-parts must render inside their `Root` component — they consume React context and throw at runtime if placed outside it.
- **CVA variants** define the styling API. Variant configs (e.g., `buttonVariants`) are exported alongside components so consumers can apply styles to custom elements.
- **Disabled states** use `data-[disabled]:` Tailwind modifier, never `:disabled` (Base UI sets `data-disabled` attribute). Conditional hover: `hover:not-data-disabled:`.
- **Props** extend `React.ComponentPropsWithoutRef<typeof BaseXxx>` plus `VariantProps<typeof xxxVariants>`.
- **`cn()` utility** (`clsx` + `twMerge`) merges base classes with consumer `className` overrides.
- **`React.forwardRef`** with `displayName` on all wrapped primitives and sub-components.

### Design Tokens (Craft Palette)

All colors use oklch color space, defined in `src/styles.css`:

| Token | Tailwind class | Semantic role |
|-------|---------------|---------------|
| `--color-kraft` | `kraft` | Primary text, borders |
| `--color-denim` | `denim` | Primary actions (buttons) |
| `--color-ribbon` | `ribbon` | Focus rings, links, info |
| `--color-mustard` | `mustard` | Warning states |
| `--color-canvas` | `canvas` | Neutral backgrounds |
| `--color-spool` | `spool` | Destructive/error |
| `--color-surface` | `surface` | Page/card backgrounds |
| `--font-display` | `font-display` | Display font (Lora serif) |

Use `bg-surface` for card/panel backgrounds — never `bg-white`. The `surface` token adapts automatically in dark mode.

### Dark Mode (After Hours)

- Class-based toggle: `.dark` scope in `src/styles.css` redefines all tokens
- `@custom-variant dark (&:where(.dark, .dark *))` enables Tailwind's `dark:` modifier
- Storybook: "Workshop" (light) / "After Hours" (dark) via `withThemeByClassName`

### Story Categories

| Category | Storybook title prefix | Purpose |
|----------|----------------------|---------|
| Guide | `Guide/` | Theming and Typography documentation |
| Notions | `Notions/` | Base UI primitive wrappers |
| Patterns | `Patterns/` | Composed helpers (SearchField, AvatarLabel) |
| Projects | `Projects/` | Page-level components (ProfileCard, PageHeader) |
| Blueprints | `Blueprints/` | Wireframe templates with placeholder states |
| Showroom | `Showroom/` | Interactive pages with real seed data |

### Build Pipeline

`build.ts` runs three steps:
1. **Bun.build()** — entrypoints from `src/index.ts` + every `src/components/*/index.ts` + `src/utils/cn.ts`, with `splitting: true` for per-component chunks. React, ReactDOM, and `@base-ui/react` are externalized.
2. **@tailwindcss/cli** — compiles `src/styles.css` → `dist/styles.css` (pre-compiled + minified, consumers just import it)
3. **tsc** — declaration files only (`emitDeclarationOnly`)

`src/fonts.css` is copied to `dist/fonts.css` as an opt-in Google Fonts import (Lora).

### Exports

Subpath exports for every component in kebab-case (`rivet-ui/button`, `rivet-ui/badge`, etc.), plus:
- `rivet-ui` — all components, variants, utilities
- `rivet-ui/utils` — `cn()` only
- `rivet-ui/styles` — CSS stylesheet
- `rivet-ui/fonts` — opt-in Lora font import

### Releasing

- **Do not run `npm publish` directly.** GitHub Actions handles publishing.
- Uses Changesets for version management.
- To release: bump version in `package.json`, commit, push to `main`.

### Key Files

- `src/styles.css` — Tailwind config + design tokens + dark mode
- `src/fonts.css` — opt-in Google Fonts import (Lora)
- `src/index.ts` — public API barrel export
- `src/utils/cn.ts` — class merging utility
- `build.ts` — build script
- `.storybook/preview.tsx` — theme toggle + story sort order
