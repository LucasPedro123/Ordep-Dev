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

    main, section, header, footer {
        padding-inline: 10%; 
       

        @media screen and (max-width: 1440px) {
            padding-inline: 4%; 
        }
    }

    p, h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
    }

    a {
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
