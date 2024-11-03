import { forwardRef, InputHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/components/shared/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
}

const inputVariants = cva(
    [
        'flex h-[3.25rem] w-full px-4 rounded-xl',
        'border text-textPrimary bg-transparent text-bodyM',
        'placeholder:text-textSecondary focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'transition-colors',
    ],
    {
        variants: {
            hasError: {
                true: 'border-danger',
                false: 'border-input hover:border-textSecondary focus-visible:border-textSecondary ',
            },
        },
    }
);

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, type, label, errorMessage, ...restProps } = props;

    const hasError = errorMessage !== undefined;

    return (
        <label>
            <span className="block text-textSecondary text-bodyM mb-2">{label}</span>

            <input
                type={type}
                className={cn(
                    inputVariants({
                        hasError,
                    }),
                    className
                )}
                ref={ref}
                {...restProps}
            />

            {hasError && (
                <span className="block mt-2 text-bodyM text-danger animate-fadeIn">
                    {errorMessage}
                </span>
            )}
        </label>
    );
});
Input.displayName = 'Input';

export { Input };
