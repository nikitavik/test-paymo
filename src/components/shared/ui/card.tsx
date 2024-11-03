import { FC, PropsWithChildren } from 'react';
import { cn } from '@/components/shared/lib/utils';

interface CardProps extends PropsWithChildren {
    className?: string;
}

export const Card: FC<CardProps> = ({ className, children }) => {
    return <div className={cn('bg-white px-8 pt-8 pb-12 rounded-3xl', className)}>{children}</div>;
};
