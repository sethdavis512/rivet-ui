import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Badge } from './Badge';

const meta = {
    title: 'Notions/Badge',
    component: Badge,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'ribbon',
                'mustard',
                'kraft',
                'denim',
                'spool',
                'outline'
            ]
        }
    }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ribbon: Story = {
    args: { children: 'Ribbon', variant: 'ribbon' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText('Ribbon')).toBeInTheDocument();
    }
};

export const Mustard: Story = {
    args: { children: 'Mustard', variant: 'mustard' }
};

export const Kraft: Story = {
    args: { children: 'Kraft', variant: 'kraft' }
};

export const Denim: Story = {
    args: { children: 'Denim', variant: 'denim' }
};

export const Spool: Story = {
    args: { children: 'Spool', variant: 'spool' }
};

export const Outline: Story = {
    args: { children: 'Outline', variant: 'outline' }
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge variant="ribbon">Ribbon</Badge>
            <Badge variant="mustard">Mustard</Badge>
            <Badge variant="kraft">Kraft</Badge>
            <Badge variant="denim">Denim</Badge>
            <Badge variant="spool">Spool</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    )
};
