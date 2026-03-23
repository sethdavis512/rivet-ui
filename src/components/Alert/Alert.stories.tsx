import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta = {
    title: 'Notions/Alert',
    component: Alert,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'info', 'warning', 'error']
        }
    }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert variant="default" className="w-96">
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
                Everything looks good. No action needed right now.
            </AlertDescription>
        </Alert>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByRole('alert')).toBeInTheDocument();
        await expect(canvas.getByText('Heads up')).toBeInTheDocument();
    }
};

export const Info: Story = {
    render: () => (
        <Alert variant="info" className="w-96">
            <AlertTitle>New components just shipped</AlertTitle>
            <AlertDescription>
                Fresh patterns are in the workshop. Updated tokens, tighter
                accessibility, and a few things we think you'll love.
            </AlertDescription>
        </Alert>
    )
};

export const Warning: Story = {
    render: () => (
        <Alert variant="warning" className="w-96">
            <AlertTitle>Approaching usage limit</AlertTitle>
            <AlertDescription>
                You've used 90% of your monthly quota. Consider upgrading
                or trimming unused assets before the cycle resets.
            </AlertDescription>
        </Alert>
    )
};

export const Error: Story = {
    render: () => (
        <Alert variant="error" className="w-96">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
                We couldn't save your changes. Check your connection and give
                it another try.
            </AlertDescription>
        </Alert>
    )
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-3 w-96">
            <Alert variant="default">
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>
                    A quiet note — nothing urgent, just keeping you in the
                    loop.
                </AlertDescription>
            </Alert>
            <Alert variant="info">
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                    Something worth knowing — take a look when you have a
                    moment.
                </AlertDescription>
            </Alert>
            <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                    Something needs your attention before you move on.
                </AlertDescription>
            </Alert>
            <Alert variant="error">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Something broke. We're on it — sit tight.
                </AlertDescription>
            </Alert>
        </div>
    )
};
