import { DefaultTheme } from 'styled-components';

export const ThemeGlobal: DefaultTheme = {
    colors: {
        primary100: '#043873',
        primary200: '#4F9CF9',
        secondary100: '#A7CEFC',
        secondary200: '#FFE492',
        background: '#f9f9f9',
        gray: '#212529',
        white: '#FFFFFF',
    },
    fonts: {
        main: 'Inter, sans-serif',
    },
    fontSizes: {
        headline100: '72px',
        headline200: '64px',
        headline300: '54px',
        headline400: '36px',
        headline500: '28px',
        paragraphP1: '24px',
        paragraphP2: '18px',
        paragraphP3: '16px',
        paragraphP4: '13px',
    },
    fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400
    }
};
