import { cva, type VariantProps } from 'cva';
import { cn } from '../../utils/cn';

export const badgeVariants = cva({
    base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
    variants: {
        variant: {
            ribbon: 'border border-ribbon/20 bg-ribbon/10 text-ribbon',
            mustard: 'border border-mustard/20 bg-mustard/10 text-mustard',
            kraft: 'border border-kraft/15 bg-canvas text-kraft',
            denim: 'border border-denim/20 bg-denim/10 text-denim',
            spool: 'border border-spool/20 bg-spool/10 text-spool',
            outline: 'border border-kraft/30 bg-transparent text-kraft'
        }
    },
    defaultVariants: {
        variant: 'ribbon'
    }
});

export interface BadgeProps
    extends
        React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <span
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    );
}
