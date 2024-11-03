import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                textPrimary: 'hsla(220, 12%, 15%, 1)',
                textSecondary: 'hsla(220, 12%, 15%, 0.7)',
                background: 'hsla(210, 10%, 96%, 1)',
                primary: 'hsla(216, 95%, 48%, 1)',
                secondary: 'hsla(216, 95%, 48%, 0.08)',
                danger: 'hsla(20, 100%, 38%, 1)',
                input: 'hsla(220, 12%, 15%, 0.16)',
            },
            fontSize: {
                headlineM: [
                    '1.5rem',
                    {
                        lineHeight: '1.166666',
                    },
                ],
                bodyM: [
                    '1rem',
                    {
                        lineHeight: '1.25',
                    },
                ],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease forwards',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
