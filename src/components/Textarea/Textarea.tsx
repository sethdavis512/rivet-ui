import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';
import React from 'react';

export const textareaVariants = cva({
    base: 'flex w-full rounded-lg border bg-surface px-3 py-2 text-sm text-kraft transition-colors placeholder:text-kraft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    variants: {
        variant: {
            default: 'border-kraft/20 focus-visible:border-ribbon focus-visible:ring-ribbon',
            error: 'border-spool focus-visible:ring-spool'
        },
        size: {
            sm: 'min-h-16 text-xs',
            md: 'min-h-24',
            lg: 'min-h-36 text-base'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'md'
    }
});

export interface TextareaProps
    extends Omit<React.ComponentPropsWithoutRef<'textarea'>, 'size'>,
        VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(textareaVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);

Textarea.displayName = 'Textarea';
