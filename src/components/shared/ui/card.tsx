import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>;
};
