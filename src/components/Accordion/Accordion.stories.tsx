import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import {
    AccordionRoot,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionPanel
} from './Accordion';

const meta = {
    title: 'Notions/Accordion',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <AccordionRoot className="w-96">
            <AccordionItem value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>What is rivet-ui?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        A component library built for people who care about the
                        details. Warm colors, considered typography, and
                        accessible primitives — designed to feel handmade, not
                        mass-produced.
                    </div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionHeader>
                    <AccordionTrigger>How do I get started?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        Install the package, import what you need, and bring in
                        the stylesheet. Each component is designed to work
                        beautifully out of the box — or you can customize every
                        design token to make it yours.
                    </div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionHeader>
                    <AccordionTrigger>Is it free to use?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        Absolutely. Rivet UI is free and open source under the
                        MIT license. Use it, remix it, make it yours.
                    </div>
                </AccordionPanel>
            </AccordionItem>
        </AccordionRoot>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const trigger = canvas.getByRole('button', {
            name: /what is rivet-ui/i
        });
        await expect(trigger).toBeInTheDocument();
    }
};

export const DefaultOpen: Story = {
    render: () => (
        <AccordionRoot defaultValue={['item-1']} className="w-96">
            <AccordionItem value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>What is rivet-ui?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        A component library built for people who care about the
                        details. Warm colors, considered typography, and
                        accessible primitives — designed to feel handmade, not
                        mass-produced.
                    </div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionHeader>
                    <AccordionTrigger>How do I get started?</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">
                        Install the package, import what you need, and bring in
                        the stylesheet. Each component works beautifully out of
                        the box.
                    </div>
                </AccordionPanel>
            </AccordionItem>
        </AccordionRoot>
    )
};

export const MultipleOpen: Story = {
    render: () => (
        <AccordionRoot multiple className="w-96">
            <AccordionItem value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>Panel One</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">Content for panel one.</div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionHeader>
                    <AccordionTrigger>Panel Two</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">Content for panel two.</div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionHeader>
                    <AccordionTrigger>Panel Three</AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                    <div className="pb-3">Content for panel three.</div>
                </AccordionPanel>
            </AccordionItem>
        </AccordionRoot>
    )
};
