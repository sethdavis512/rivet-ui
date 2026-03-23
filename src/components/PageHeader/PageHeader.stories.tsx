import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { Button } from '../Button';
import { Badge } from '../Badge';

const meta: Meta<typeof PageHeader> = {
    title: 'Projects/PageHeader',
    component: PageHeader,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    args: {
        title: 'Artists'
    }
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};

export const WithSubtitle: Story = {
    args: {
        title: 'Artists',
        subtitle:
            'The creators and collaborators in your directory.'
    }
};

export const WithActions: Story = {
    args: {
        title: 'Artists',
        subtitle: '142 artists',
        actions: (
            <>
                <Button variant="outline" size="sm">
                    Export
                </Button>
                <Button size="sm">Add Artist</Button>
            </>
        )
    }
};

export const WithEyebrow: Story = {
    args: {
        eyebrow: 'Directory',
        title: 'Artists',
        subtitle: 'Painters, musicians, and makers from every era.',
        actions: <Button size="sm">Add Artist</Button>
    }
};

export const WithBadge: Story = {
    args: {
        title: 'Artists',
        subtitle: 'Everyone in your creative directory.',
        eyebrow: 'Studio',
        actions: (
            <>
                <Badge variant="mustard">142 total</Badge>
                <Button variant="outline" size="sm">
                    Filter
                </Button>
                <Button size="sm">Add Artist</Button>
            </>
        )
    }
};
