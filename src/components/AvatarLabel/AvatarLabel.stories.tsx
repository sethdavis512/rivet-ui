import type { Meta, StoryObj } from '@storybook/react';
import { AvatarLabel } from './AvatarLabel';

const meta: Meta<typeof AvatarLabel> = {
    title: 'Patterns/AvatarLabel',
    component: AvatarLabel,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {
        initials: 'JM',
        name: 'Joni Mitchell',
        subtitle: 'Musician & Painter'
    }
};

export default meta;
type Story = StoryObj<typeof AvatarLabel>;

export const Default: Story = {};

export const Small: Story = {
    args: { size: 'sm', subtitle: 'Laurel Canyon, CA' }
};

export const Large: Story = {
    args: { size: 'lg', subtitle: 'Songwriter · Laurel Canyon, CA' }
};

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=12',
        alt: 'Joni Mitchell',
        subtitle: 'Folk & Jazz Pioneer'
    }
};

export const AllColors: Story = {
    render: () => (
        <div className="flex flex-col gap-3">
            {(
                [
                    'ribbon',
                    'mustard',
                    'kraft',
                    'denim',
                    'spool',
                    'canvas'
                ] as const
            ).map((color) => (
                <AvatarLabel
                    key={color}
                    avatarColor={color}
                    initials={color.slice(0, 2).toUpperCase()}
                    name={color.charAt(0).toUpperCase() + color.slice(1)}
                    subtitle="Rivet UI"
                />
            ))}
        </div>
    )
};
