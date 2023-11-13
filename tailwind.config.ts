import type { Config } from 'tailwindcss';

type MyConfig = {
    [key: string]: string;
};
// default values for height and width are percetage
// also allows for vw and vh usages
const vwConfig: MyConfig = {};
const vhConfig: MyConfig = {};
for (let i = 1; i <= 100; i++) {
    // adding percentage values
    vwConfig[`${i}%`] = `${i}%`;
    vhConfig[`${i}%`] = `${i}%`;

    // adding vw and vh values
    vwConfig[`${i}vw`] = `${i}vw`;
    vhConfig[`${i}vh`] = `${i}vh`;
}

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                blacK: '#000000',
                white: '#FFFFFF',
                blue: '#495CEF',
                yellow: '#FFC328',
                gray: {
                    100: '#F7FAFC',
                    200: '#EDF2F7',
                    300: '#E2E8F0',
                    400: '#CBD5E0',
                    500: '#A0AEC0',
                    600: '#718096',
                    700: '#4A5568',
                    800: '#2D3748',
                },
                'gray-dark': '#2D2D2D',
                'gray-med': '#696969',
                'gray-midlight': '#A9A9A9',
                'gray-light': '#EFEFEF',
                purple: {
                    100: '#F5E1FF',
                    200: '#E2B3FF',
                    300: '#CF85FF',
                    400: '#BC57FF',
                    500: '#9B59B6',
                    600: '#7B4793',
                    700: '#5A356F',
                    800: '#3A234C',
                    900: '#1A1128',
                },
                green: {
                    100: '#E6F5F0',
                    200: '#BFEAD9',
                    300: '#99DFC2',
                    400: '#4DCF95',
                    500: '#26C281',
                    600: '#1F9A69',
                    700: '#14714A',
                    800: '#0D4931',
                    900: '#062417',
                },
            },
            width: vwConfig,
            height: vhConfig,
            minWidth: vwConfig,
            minHeight: vhConfig,
        },
    },
    plugins: [],
};
export default config;
