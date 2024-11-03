import { ButtonHTMLAttributes, forwardRef, PropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/components/shared/lib/utils';

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl',
        'text-bodyM font-medium',
        'focus-visible:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        'transition-colors',
    ],
    {
        variants: {
            variant: {
                primary: 'bg-primary text-white hover:bg-primary/80 focus-visible:bg-primary/80',
                secondary:
                    'bg-secondary text-primary hover:bg-secondary/10 focus-visible:bg-secondary/10',
            },
            size: {
                default: 'h-[3.25rem] px-6 py-2',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, PropsWithoutRef<ButtonProps>>(
    ({ className, variant, size, asChild = false, type, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                type={type ?? 'button'}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
