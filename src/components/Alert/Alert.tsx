import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';

export const alertVariants = cva({
    base: 'relative w-full rounded-lg border-l-4 p-4',
    variants: {
        variant: {
            info: 'border-l-ribbon bg-ribbon/6 text-kraft dark:bg-ribbon/12 dark:text-ribbon',
            warning: 'border-l-mustard bg-mustard/6 text-kraft dark:bg-mustard/12 dark:text-mustard',
            error: 'border-l-spool bg-spool/6 text-kraft dark:bg-spool/12 dark:text-spool',
            default: 'border-l-kraft bg-canvas text-kraft'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});

export interface AlertProps
    extends
        React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
    return (
        <div
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        />
    );
}

export function AlertTitle({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h5
            className={cn(
                'mb-1 font-semibold leading-none tracking-tight',
                className
            )}
            {...props}
        />
    );
}

export function AlertDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={cn('text-sm opacity-90', className)} {...props} />;
}
