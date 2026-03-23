import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Button } from '../Button';

const meta: Meta<typeof ProfileCard> = {
    title: 'Projects/ProfileCard',
    component: ProfileCard,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {
        initials: 'FK',
        name: 'Frida Kahlo',
        role: 'Painter'
    }
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};

export const WithBadge: Story = {
    args: {
        badge: 'Surrealism',
        badgeVariant: 'ribbon'
    }
};

export const WithBio: Story = {
    args: {
        badge: 'Mexico City',
        badgeVariant: 'kraft',
        bio: 'Turned pain into radiant color. Her self-portraits are among the most honest art ever made.'
    }
};

export const WithActions: Story = {
    args: {
        bio: 'A lifetime in the studio, transforming personal mythology into universal truth.',
        badge: 'Modern Master',
        badgeVariant: 'mustard',
        actions: (
            <>
                <Button variant="outline" size="sm">
                    Message
                </Button>
                <Button size="sm">Follow</Button>
            </>
        )
    }
};

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=47',
        alt: 'Frida Kahlo',
        role: 'Painter & Muralist',
        badge: 'Mexico City',
        badgeVariant: 'ribbon',
        bio: 'Obsessed with truth, color, and the deep roots of Mexican folk art.',
        actions: (
            <>
                <Button variant="outline" size="sm">
                    Message
                </Button>
                <Button size="sm">Follow</Button>
            </>
        )
    }
};

export const Destructive: Story = {
    name: 'With Destructive Badge',
    args: {
        initials: 'AI',
        name: 'Ai Weiwei',
        role: 'Sculptor & Activist',
        badge: 'Restricted',
        badgeVariant: 'spool',
        bio: 'Profile visibility limited by regional policy.'
    }
};
