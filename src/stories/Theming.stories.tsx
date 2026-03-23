import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Input } from '../components/Input';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from '../components/Card';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert';
import { Avatar } from '../components/Avatar';
import { SwitchRoot, SwitchThumb } from '../components/Switch';

/* ── Token metadata ────────────────────────────────────────────── */

const tokenDocs = [
    {
        name: '--color-ribbon',
        tailwind: 'ribbon',
        swatch: 'bg-ribbon',
        description: 'Muted teal — focus rings, interactive accents, links',
        example: 'border-ribbon text-ribbon bg-ribbon/10'
    },
    {
        name: '--color-mustard',
        tailwind: 'mustard',
        swatch: 'bg-mustard',
        description: 'Warm ochre — warning states, attention badges',
        example: 'text-mustard bg-mustard/10'
    },
    {
        name: '--color-kraft',
        tailwind: 'kraft',
        swatch: 'bg-kraft',
        description: 'Warm brown — primary text, borders, headings',
        example: 'text-kraft border-kraft/20'
    },
    {
        name: '--color-denim',
        tailwind: 'denim',
        swatch: 'bg-denim',
        description: 'Muted navy — primary action buttons',
        example: 'bg-denim text-white'
    },
    {
        name: '--color-canvas',
        tailwind: 'canvas',
        swatch: 'bg-canvas',
        description: 'Warm cream — neutral backgrounds, subtle panels',
        example: 'bg-canvas border-canvas'
    },
    {
        name: '--color-spool',
        tailwind: 'spool',
        swatch: 'bg-spool',
        description: 'Terracotta — destructive actions, error states',
        example: 'text-spool bg-spool/10'
    },
    {
        name: '--color-surface',
        tailwind: 'surface',
        swatch: 'bg-surface border border-kraft/10',
        description:
            'Panel / card backgrounds — adapts automatically in dark mode',
        example: 'bg-surface shadow-sm'
    }
] as const;

const meta: Meta = {
    title: 'Guide/Theming',
    parameters: { layout: 'centered' },
    tags: []
};

export default meta;
type Story = StoryObj;

/* ── Theme definitions ─────────────────────────────────────────── */

const themes = {
    'Workshop (Default)': {},
    'Linen': {
        '--color-ribbon': 'oklch(55% 0.08 260)',
        '--color-mustard': 'oklch(72% 0.10 80)',
        '--color-kraft': 'oklch(33% 0.03 320)',
        '--color-denim': 'oklch(48% 0.12 340)',
        '--color-canvas': 'oklch(95% 0.01 350)',
        '--color-spool': 'oklch(55% 0.14 5)',
        '--color-surface': '#fdf7f8',
        '--font-display': "'Georgia', serif"
    },
    'Moss': {
        '--color-ribbon': 'oklch(55% 0.10 145)',
        '--color-mustard': 'oklch(72% 0.13 85)',
        '--color-kraft': 'oklch(33% 0.04 100)',
        '--color-denim': 'oklch(42% 0.10 155)',
        '--color-canvas': 'oklch(95% 0.012 120)',
        '--color-spool': 'oklch(54% 0.15 25)',
        '--color-surface': '#f6f8f4',
        '--font-display': "'Georgia', serif"
    },
    'Garden Studio': {
        '--color-ribbon': 'oklch(60% 0.16 155)',
        '--color-mustard': 'oklch(72% 0.15 95)',
        '--color-kraft': 'oklch(33% 0.06 130)',
        '--color-denim': 'oklch(55% 0.20 290)',
        '--color-canvas': 'oklch(95% 0.02 130)',
        '--color-spool': 'oklch(65% 0.22 330)',
        '--color-surface': '#f8fdf5',
        '--font-display': "'Georgia', serif"
    },
    'Inkwell': {
        '--color-ribbon': 'oklch(52% 0.12 265)',
        '--color-mustard': 'oklch(72% 0.12 70)',
        '--color-kraft': 'oklch(30% 0.03 260)',
        '--color-denim': 'oklch(40% 0.14 270)',
        '--color-canvas': 'oklch(95% 0.008 260)',
        '--color-spool': 'oklch(52% 0.16 350)',
        '--color-surface': '#f5f6fa',
        '--font-display': "'Georgia', serif"
    },
    'Kiln': {
        '--color-ribbon': 'oklch(58% 0.12 50)',
        '--color-mustard': 'oklch(72% 0.14 70)',
        '--color-kraft': 'oklch(32% 0.05 45)',
        '--color-denim': 'oklch(45% 0.12 35)',
        '--color-canvas': 'oklch(95% 0.015 55)',
        '--color-spool': 'oklch(50% 0.17 15)',
        '--color-surface': '#fdf6f0',
        '--font-display': "'Georgia', serif"
    },
    'Patina': {
        '--color-ribbon': 'oklch(55% 0.10 185)',
        '--color-mustard': 'oklch(73% 0.11 80)',
        '--color-kraft': 'oklch(32% 0.03 190)',
        '--color-denim': 'oklch(43% 0.10 195)',
        '--color-canvas': 'oklch(95% 0.008 185)',
        '--color-spool': 'oklch(55% 0.15 30)',
        '--color-surface': '#f4f7f6',
        '--font-display': "'Georgia', serif"
    },
    'Madder': {
        '--color-ribbon': 'oklch(50% 0.14 15)',
        '--color-mustard': 'oklch(72% 0.12 65)',
        '--color-kraft': 'oklch(30% 0.04 15)',
        '--color-denim': 'oklch(42% 0.14 10)',
        '--color-canvas': 'oklch(95% 0.01 15)',
        '--color-spool': 'oklch(48% 0.18 360)',
        '--color-surface': '#fdf5f5',
        '--font-display': "'Georgia', serif"
    },
    'Bazaar': {
        '--color-ribbon': 'oklch(62% 0.18 190)',
        '--color-mustard': 'oklch(78% 0.17 80)',
        '--color-kraft': 'oklch(32% 0.06 40)',
        '--color-denim': 'oklch(50% 0.22 300)',
        '--color-canvas': 'oklch(95% 0.015 70)',
        '--color-spool': 'oklch(62% 0.22 25)',
        '--color-surface': '#fefaf5',
        '--font-display': "'Georgia', serif"
    },
    'Umber': {
        '--color-ribbon': 'oklch(50% 0.06 55)',
        '--color-mustard': 'oklch(70% 0.08 65)',
        '--color-kraft': 'oklch(28% 0.03 50)',
        '--color-denim': 'oklch(40% 0.07 50)',
        '--color-canvas': 'oklch(94% 0.01 60)',
        '--color-spool': 'oklch(48% 0.12 25)',
        '--color-surface': '#f8f5f0',
        '--font-display': "'Georgia', serif"
    }
} as const;

type ThemeName = keyof typeof themes;

/* ── Component showcase (reused across themes) ─────────────────── */

function ComponentShowcase() {
    return (
        <div className="space-y-6">
            {/* Buttons */}
            <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kraft/50">
                    Buttons
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            </div>

            {/* Badges */}
            <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kraft/50">
                    Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="ribbon">Ribbon</Badge>
                    <Badge variant="mustard">Mustard</Badge>
                    <Badge variant="kraft">Kraft</Badge>
                    <Badge variant="denim">Denim</Badge>
                    <Badge variant="spool">Spool</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
            </div>

            {/* Avatars */}
            <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kraft/50">
                    Avatars
                </h3>
                <div className="flex gap-3">
                    <Avatar color="ribbon" initials="MK" />
                    <Avatar color="mustard" initials="YN" />
                    <Avatar color="denim" initials="DN" />
                    <Avatar color="spool" initials="SP" />
                    <Avatar color="canvas" initials="CV" />
                </div>
            </div>

            {/* Card with form */}
            <Card>
                <CardHeader>
                    <CardTitle>Sample Card</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Input placeholder="Type something..." />
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-kraft">
                            Enable feature
                        </span>
                        <SwitchRoot defaultChecked>
                            <SwitchThumb />
                        </SwitchRoot>
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-2">
                    <Button variant="outline" size="sm">
                        Cancel
                    </Button>
                    <Button size="sm">Save</Button>
                </CardFooter>
            </Card>

            {/* Alerts */}
            <div className="space-y-3">
                <Alert variant="info">
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>
                        This is an informational alert.
                    </AlertDescription>
                </Alert>
                <Alert variant="warning">
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                        Something needs your attention.
                    </AlertDescription>
                </Alert>
                <Alert variant="error">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Something went wrong.</AlertDescription>
                </Alert>
            </div>
        </div>
    );
}

/* ── Theme Switcher Story ──────────────────────────────────────── */

function ThemeSwitcher() {
    const [activeTheme, setActiveTheme] = React.useState<ThemeName>(
        'Workshop (Default)'
    );

    const themeVars = themes[activeTheme];

    return (
        <div
            className="min-w-[540px] max-w-2xl space-y-6 rounded-xl bg-surface p-8"
            style={themeVars as React.CSSProperties}
        >
            <div>
                <h2 className="font-display text-2xl font-bold text-kraft">
                    Theme Customization
                </h2>
                <p className="mt-1 text-sm text-kraft/60">
                    Override CSS custom properties to make Rivet UI your
                    own. Pick a theme below to see how the same components look
                    with different token values.
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {(Object.keys(themes) as ThemeName[]).map((name) => (
                    <button
                        key={name}
                        type="button"
                        onClick={() => setActiveTheme(name)}
                        className={[
                            'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                            activeTheme === name
                                ? 'border-ribbon bg-ribbon/10 text-ribbon'
                                : 'border-kraft/20 text-kraft/60 hover:border-kraft/40'
                        ].join(' ')}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <ComponentShowcase />

            {activeTheme !== 'Workshop (Default)' && (
                <details className="rounded-lg border border-kraft/15 bg-canvas/30 p-4">
                    <summary className="cursor-pointer text-sm font-medium text-kraft">
                        CSS to apply this theme
                    </summary>
                    <pre className="mt-3 overflow-x-auto rounded-md bg-surface p-3 text-xs text-kraft/80">
                        {`:root {\n${Object.entries(themeVars)
                            .map(([k, v]) => `  ${k}: ${v};`)
                            .join('\n')}\n}`}
                    </pre>
                </details>
            )}
        </div>
    );
}

export const ThemeDemo: Story = {
    name: 'Theme Customization',
    render: () => <ThemeSwitcher />
};

/* ── Token Palette Story ──────────────────────────────────────── */

function TokenPalette() {
    return (
        <div className="min-w-[600px] max-w-2xl space-y-6 rounded-xl bg-surface p-8">
            <div>
                <h2 className="font-display text-2xl font-bold text-kraft">
                    Design Tokens
                </h2>
                <p className="mt-1 text-sm text-kraft/60">
                    Rivet UI exposes its entire color palette as CSS custom
                    properties. Every color has a matching Tailwind utility
                    class generated at build time.
                </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-kraft/10">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-canvas/50 text-left text-xs font-semibold uppercase tracking-wider text-kraft/50">
                            <th className="px-4 py-2.5">Token</th>
                            <th className="px-4 py-2.5">Swatch</th>
                            <th className="px-4 py-2.5">Tailwind class</th>
                            <th className="px-4 py-2.5">Used for</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-kraft/8">
                        {tokenDocs.map((token) => (
                            <tr
                                key={token.name}
                                className="bg-surface transition-colors hover:bg-canvas/20"
                            >
                                <td className="px-4 py-3 font-mono text-xs text-kraft/70">
                                    {token.name}
                                </td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-block h-6 w-6 rounded-full ${token.swatch}`}
                                    />
                                </td>
                                <td className="px-4 py-3 font-mono text-xs text-ribbon">
                                    {token.tailwind}
                                </td>
                                <td className="px-4 py-3 text-kraft/70">
                                    {token.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="rounded-lg border border-kraft/10 bg-canvas/30 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-kraft/50">
                    How tokens map to Tailwind
                </p>
                <pre className="overflow-x-auto text-xs text-kraft/80">{`/* src/styles.css — token declaration */
@theme {
  --color-ribbon: oklch(68% 0.17 205);      /* → bg-ribbon, text-ribbon, border-ribbon … */
  --color-denim: oklch(52% 0.19 282);
  /* etc. */
}

/* Usage in your component */
<div className="bg-ribbon/10 text-ribbon border border-ribbon/30" />`}</pre>
            </div>
        </div>
    );
}

export const Tokens: Story = {
    name: 'Design Token Reference',
    render: () => <TokenPalette />
};

/* ── Dark Mode Story ──────────────────────────────────────────── */

function DarkModeShowcase() {
    return (
        <div className="min-w-[600px] max-w-2xl space-y-6 rounded-xl bg-surface p-8">
            <div>
                <h2 className="font-display text-2xl font-bold text-kraft">
                    Dark Mode — After Hours
                </h2>
                <p className="mt-1 text-sm text-kraft/60">
                    Dark mode is toggled by adding the{' '}
                    <code className="rounded bg-canvas px-1.5 py-0.5 font-mono text-xs text-kraft">
                        .dark
                    </code>{' '}
                    class to any ancestor element. All design tokens are
                    automatically redefined within that scope — no per-component
                    overrides needed.
                </p>
            </div>

            <div className="rounded-lg border border-kraft/10 bg-canvas/30 p-4 text-sm">
                <p className="mb-2 font-semibold text-kraft">
                    How it works in CSS
                </p>
                <pre className="overflow-x-auto text-xs text-kraft/80">{`/* src/styles.css */
@custom-variant dark (&:where(.dark, .dark *));

.dark {
  --color-surface:    oklch(18% 0.01 260);
  --color-ribbon:        oklch(75% 0.16 205);
  --color-kraft:      oklch(88% 0.02 60);
  /* … all tokens redefined … */
}

/* Components just use semantic tokens — they adapt automatically */
<Card className="bg-surface text-kraft" />`}</pre>
            </div>

            <div className="rounded-lg border border-kraft/10 bg-canvas/30 p-4 text-sm">
                <p className="mb-2 font-semibold text-kraft">
                    Per-state Tailwind modifiers
                </p>
                <p className="mb-3 text-kraft/60">
                    Base UI sets data attributes (
                    <code className="font-mono text-xs">data-disabled</code>,{' '}
                    <code className="font-mono text-xs">data-checked</code>,{' '}
                    <code className="font-mono text-xs">data-open</code>)
                    instead of CSS pseudo-classes. Target them with Tailwind's{' '}
                    <code className="font-mono text-xs">data-[…]:</code>{' '}
                    modifier:
                </p>
                <pre className="overflow-x-auto text-xs text-kraft/80">{`/* ✅ Correct — works with Base UI */
className="data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"

/* ❌ Avoid — :disabled doesn't fire on Base UI primitives */
className="disabled:opacity-50"`}</pre>
            </div>

            <div className="rounded-lg border border-kraft/10 bg-canvas/30 p-4 text-sm">
                <p className="mb-2 font-semibold text-kraft">
                    Activating dark mode in your app
                </p>
                <pre className="overflow-x-auto text-xs text-kraft/80">{`// Toggle .dark on <html> or any container
document.documentElement.classList.toggle('dark');

// Or with a React state approach
<div className={isDark ? 'dark' : ''}>
  <App />
</div>`}</pre>
            </div>

            <Alert variant="info">
                <AlertTitle>Storybook theme toggle</AlertTitle>
                <AlertDescription>
                    Use the <strong>Theme</strong> button in the Storybook
                    toolbar (top-right) to preview any story in dark mode. All
                    components re-render with the correct token values
                    automatically.
                </AlertDescription>
            </Alert>
        </div>
    );
}

export const DarkMode: Story = {
    name: 'Dark Mode',
    render: () => <DarkModeShowcase />
};

/* ── How to Apply a Custom Theme ─────────────────────────────── */

function CustomThemeGuide() {
    return (
        <div className="min-w-[600px] max-w-2xl space-y-6 rounded-xl bg-surface p-8">
            <div>
                <h2 className="font-display text-2xl font-bold text-kraft">
                    Applying a Custom Theme
                </h2>
                <p className="mt-1 text-sm text-kraft/60">
                    Because every color is a CSS custom property, you can
                    retheme the entire library — or just one section of your
                    page — with a few lines of CSS.
                </p>
            </div>

            {/* Step 1 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ribbon/10 text-sm font-bold text-ribbon">
                        1
                    </span>
                    <p className="font-semibold text-kraft">
                        Import the stylesheet
                    </p>
                </div>
                <pre className="rounded-lg bg-canvas/40 p-4 text-xs text-kraft/80">{`// In your app entry point or global CSS
import 'rivet-ui/styles';`}</pre>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ribbon/10 text-sm font-bold text-ribbon">
                        2
                    </span>
                    <p className="font-semibold text-kraft">
                        Override tokens in your own CSS
                    </p>
                </div>
                <pre className="rounded-lg bg-canvas/40 p-4 text-xs text-kraft/80">{`/* global.css */
:root {
  --color-ribbon:          oklch(62% 0.12 220);  /* teal → ocean blue */
  --color-denim:   oklch(50% 0.16 250);
  --color-spool: oklch(58% 0.18 350);
  --color-surface:      #f5faff;
}

/* Dark mode overrides apply automatically inside .dark */
.dark {
  --color-surface: oklch(14% 0.01 240);
}`}</pre>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ribbon/10 text-sm font-bold text-ribbon">
                        3
                    </span>
                    <p className="font-semibold text-kraft">
                        Or scope themes to a subtree
                    </p>
                </div>
                <pre className="rounded-lg bg-canvas/40 p-4 text-xs text-kraft/80">{`/* Apply a "danger zone" red theme to a specific section */
.danger-zone {
  --color-ribbon:        oklch(55% 0.22 25);
  --color-denim: oklch(50% 0.20 15);
}

// In React — tokens only affect descendants of this div
<div className="danger-zone">
  <Button>Delete account</Button>
</div>`}</pre>
            </div>

            {/* Step 4 */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ribbon/10 text-sm font-bold text-ribbon">
                        4
                    </span>
                    <p className="font-semibold text-kraft">
                        Use variant configs on your own elements
                    </p>
                </div>
                <pre className="rounded-lg bg-canvas/40 p-4 text-xs text-kraft/80">{`import { buttonVariants, cn } from 'rivet-ui';

// Apply Button styles to an <a> tag for accessible link-buttons
<a
  href="/dashboard"
  className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
>
  Go to Dashboard
</a>`}</pre>
            </div>

            <Alert variant="warning">
                <AlertTitle>oklch color space</AlertTitle>
                <AlertDescription>
                    Tokens use the <strong>oklch(lightness chroma hue)</strong>{' '}
                    color space for perceptually uniform color manipulation.
                    oklch is supported in all modern browsers. For IE11 or older
                    Safari, provide a hex fallback before the custom property.
                </AlertDescription>
            </Alert>
        </div>
    );
}

export const CustomTheme: Story = {
    name: 'How to Apply a Custom Theme',
    render: () => <CustomThemeGuide />
};
