import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
    title: 'Guide/Typography',
    parameters: { layout: 'padded' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

function Section({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="space-y-6">
            <h2 className="font-display border-b border-kraft/15 pb-3 text-xs font-semibold tracking-widest uppercase text-kraft/50">
                {title}
            </h2>
            {children}
        </section>
    );
}

export const Default: Story = {
    name: 'Typography Scale',
    render: () => (
        <div className="mx-auto max-w-3xl space-y-20 px-4 py-14 text-kraft">
            <Section title="Display Serif — Headings">
                <div className="space-y-5">
                    <h1 className="font-display text-6xl font-bold leading-none tracking-tight">
                        Crafted with Intention
                    </h1>
                    <h2 className="font-display text-5xl font-bold leading-tight">
                        Every Stitch Tells a Story
                    </h2>
                    <h3 className="font-display text-4xl font-semibold leading-snug">
                        From the Workshop to the World
                    </h3>
                    <h4 className="font-display text-3xl font-semibold">
                        Patterns at First Light
                    </h4>
                    <h5 className="font-display text-2xl font-medium">
                        Threads Along the Seam
                    </h5>
                    <h6 className="font-display text-xl font-medium">
                        Where the Details Make the Difference
                    </h6>
                </div>
            </Section>

            <Section title="Sans-Serif — Body">
                <p className="font-sans text-xl leading-relaxed text-kraft/80">
                    Good design is a craft of contrasts — from bold typographic
                    statements to whisper-quiet whitespace, dense data tables to
                    airy landing pages, rigid grids to freeform layouts.
                </p>
                <p className="font-sans text-base leading-relaxed text-kraft/70">
                    The foundation is the grid, the thread is consistency, and
                    the needle is attention to detail. Every component in the
                    library is stitched together with care, following patterns
                    that makers have refined over years of building interfaces
                    that feel handmade.
                </p>
            </Section>

            <Section title="Inline Styles">
                <p className="font-sans text-base leading-relaxed text-kraft/70">
                    Great component design relies on{' '}
                    <strong className="font-semibold text-kraft">
                        clear constraints and deliberate choices
                    </strong>
                    , letting the system do its work.{' '}
                    <em className="italic">Typography</em> is king — set with
                    nothing more than scale and weight, then refined with
                    spacing. Use{' '}
                    <code className="rounded bg-canvas/60 px-1.5 py-0.5 font-mono text-sm text-denim dark:bg-canvas/20">
                        rem
                    </code>{' '}
                    or{' '}
                    <code className="rounded bg-canvas/60 px-1.5 py-0.5 font-mono text-sm text-denim dark:bg-canvas/20">
                        em
                    </code>{' '}
                    for the best scaling. Some purists say{' '}
                    <s className="text-kraft/40">pixels are acceptable</s> —
                    they are wrong. Visit the{' '}
                    <a
                        href="#"
                        className="text-ribbon underline underline-offset-2 transition-opacity hover:opacity-75"
                    >
                        Rivet UI Pattern Library
                    </a>{' '}
                    to plan your next project.
                </p>
            </Section>

            <Section title="Blockquote">
                <blockquote className="rounded-r-lg border-l-4 border-mustard bg-mustard/8 px-6 py-5 dark:bg-mustard/12">
                    <p className="font-display text-2xl italic leading-snug text-kraft/85 dark:text-kraft/90">
                        Design is not just what it looks like and feels like.
                        Design is how it works.
                    </p>
                    <cite className="mt-4 block font-sans text-sm not-italic text-kraft/50">
                        — Steve Jobs
                    </cite>
                </blockquote>
            </Section>

            <Section title="Lists">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-kraft/50">
                            Unordered
                        </p>
                        <ul className="font-sans list-disc space-y-1.5 pl-5 text-base leading-relaxed text-kraft/70">
                            <li>Typography (the foundation of any system)</li>
                            <li>Color tokens, spacing tokens</li>
                            <li>Accessible focus indicators</li>
                            <li>Responsive breakpoints</li>
                            <li>Motion and transitions</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-kraft/50">
                            Ordered
                        </p>
                        <ol className="font-sans list-decimal space-y-1.5 pl-5 text-base leading-relaxed text-kraft/70">
                            <li>Define your design tokens</li>
                            <li>Build primitives with Base UI</li>
                            <li>Compose variants with CVA</li>
                            <li>Test with Storybook play functions</li>
                            <li>Ship and iterate</li>
                        </ol>
                    </div>
                </div>
            </Section>
        </div>
    )
};
