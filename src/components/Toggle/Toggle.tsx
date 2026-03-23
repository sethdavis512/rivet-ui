import * as React from 'react';
import { Toggle } from '@base-ui/react/toggle';
import { cn } from '../../utils/cn';

export const ToggleRoot = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Toggle>
>(({ className, ...props }, ref) => (
    <Toggle
        ref={ref}
        className={cn(
            'inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-kraft/15 bg-surface px-2 text-sm font-medium text-kraft/70 transition-colors select-none',
            'hover:bg-canvas/50 hover:text-kraft',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ribbon focus-visible:ring-offset-2',
            'data-pressed:bg-canvas data-pressed:text-kraft',
            'data-disabled:pointer-events-none data-disabled:opacity-50',
            className
        )}
        {...props}
    />
));
ToggleRoot.displayName = 'ToggleRoot';
