import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.main}; 
    }

    p, h1, h2, h3, h4 , h5 {
        margin: 0;
        padding: 0;
    }

    a{
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
    }

    li {
        list-style: none;
    }
`;
