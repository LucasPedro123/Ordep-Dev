// Theme interface
export interface ITheme {
    colors: {
        primary100: string;
        primary200: string;
        secondary100: string;
        secondary200: string;
        background: string;
        gray: string;
        white: string;
    };
    fonts: {
        main: string;
    };
    fontSizes: {
        headline100: string;
        headline200: string;
        headline300: string;
        headline400: string;
        headline500: string;
        paragraphP1: string;
        paragraphP2: string;
        paragraphP3: string;
        paragraphP4: string;
    };
    fontWeight: {
        bold: number;
        medium: number;
        semibold: number;
        regular: number;
    };
}