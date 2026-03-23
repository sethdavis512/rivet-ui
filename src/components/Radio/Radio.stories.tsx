import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import React from 'react';
import { RadioGroup, RadioRoot, RadioIndicator } from './Radio';

const meta = {
    title: 'Notions/Radio',
    component: RadioGroup,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' }
    }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizeOptions = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' }
];

export const Default: Story = {
    render: (args) => (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-kraft mb-1">
                Preferred size
            </p>
            <RadioGroup defaultValue="sm" {...args}>
                {sizeOptions.map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-2 text-sm text-kraft cursor-pointer select-none"
                    >
                        <RadioRoot value={value}>
                            <RadioIndicator />
                        </RadioRoot>
                        {label}
                    </label>
                ))}
            </RadioGroup>
        </div>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const radios = canvas.getAllByRole('radio');
        await expect(radios).toHaveLength(4);
        await expect(radios[0]).toBeChecked();
    }
};

export const Disabled: Story = {
    render: (args) => (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-kraft/50 mb-1">
                Preferred size
            </p>
            <RadioGroup defaultValue="sm" disabled {...args}>
                {sizeOptions.map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-2 text-sm text-kraft/50 cursor-not-allowed select-none"
                    >
                        <RadioRoot value={value}>
                            <RadioIndicator />
                        </RadioRoot>
                        {label}
                    </label>
                ))}
            </RadioGroup>
        </div>
    ),
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const radios = canvas.getAllByRole('radio');
        await expect(radios[0]).toBeDisabled();
    }
};

export const Horizontal: Story = {
    render: (args) => (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-kraft mb-1">Trip type</p>
            <RadioGroup
                defaultValue="one-way"
                className="flex flex-row gap-4"
                {...args}
            >
                {[
                    { value: 'one-way', label: 'One-way' },
                    { value: 'round-trip', label: 'Round trip' },
                    { value: 'multi-city', label: 'Multi-city' }
                ].map(({ value, label }) => (
                    <label
                        key={value}
                        className="flex items-center gap-2 text-sm text-kraft cursor-pointer select-none"
                    >
                        <RadioRoot value={value}>
                            <RadioIndicator />
                        </RadioRoot>
                        {label}
                    </label>
                ))}
            </RadioGroup>
        </div>
    ),
    args: {}
};
