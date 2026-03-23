import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Avatar } from './Avatar';

const meta = {
    title: 'Notions/Avatar',
    component: Avatar,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: [
                'ribbon',
                'mustard',
                'kraft',
                'denim',
                'spool',
                'canvas'
            ]
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        }
    }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { initials: 'FK', color: 'ribbon', size: 'md' },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText('FK')).toBeInTheDocument();
    }
};

export const Mustard: Story = {
    args: { initials: 'YK', color: 'mustard', size: 'md' }
};

export const Kraft: Story = {
    args: { initials: 'JB', color: 'kraft', size: 'md' }
};

export const Denim: Story = {
    args: { initials: 'NS', color: 'denim', size: 'md' }
};

export const Spool: Story = {
    args: { initials: 'PS', color: 'spool', size: 'md' }
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar initials="BK" color="ribbon" size="sm" />
            <Avatar initials="BK" color="ribbon" size="md" />
            <Avatar initials="BK" color="ribbon" size="lg" />
        </div>
    )
};

export const AllColors: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Avatar initials="FK" color="ribbon" />
            <Avatar initials="YK" color="mustard" />
            <Avatar initials="JB" color="kraft" />
            <Avatar initials="NS" color="denim" />
            <Avatar initials="DB" color="spool" />
            <Avatar initials="GO" color="canvas" />
        </div>
    )
};
