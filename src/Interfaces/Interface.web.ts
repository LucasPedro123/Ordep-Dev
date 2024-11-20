// Theme interface
export interface ITheme {
    colors: {
        primary50: string;
        primary100: string;
        primary200: string;
        primary300: string;
        primary400: string;
        primary500: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary900: string;
        primary1000: string;
        secondary50: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary900: string;
        secondary1000: string;
        background: string;
        gray: string;
        gray100: string;
        white: string;
        neutral50: string;
        neutral40: string;
        dark: string;
        yellowLight: string;
        blueLight: string;
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
