import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const fontVtb = localFont({
    src: [
        {
            path: './fonts/VTBGroupUI-Medium.woff2',
            weight: '500',
        },
        {
            path: './fonts/VTBGroupUI-Regular.woff2',
            weight: '400',
        },
    ],
    style: 'normal',
    adjustFontFallback: false,
    fallback: ['system-ui', 'Helvetica', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
    title: 'Test assignment "Payment page"',
    description: 'Test assignment "Payment page" f',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="ru">
            <body className={`${fontVtb.className} antialiased`}>{children}</body>
        </html>
    );
}
