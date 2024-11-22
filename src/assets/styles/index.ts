import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.main};
        display: grid;
        place-items: center;
        overflow-x: hidden; 
    }

    main, section, header, footer {
        padding-inline: 10%; 
        
        @media screen and (max-width: 1440px) {
            padding-inline: 4%; 
        }
        @media screen and (max-width: 768px) {
            padding-inline: 20px; 
        }
        @media screen and (max-width: 320px) {
            padding-inline: 15px; 
        }
    }

    p, h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    button, i {
        cursor: pointer;
        border: none;
    }

    li {
        list-style: none;
    }
`;
