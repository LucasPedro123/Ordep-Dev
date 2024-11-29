import styled from "styled-components";

export const Title = styled.h2<{ color?: string }>`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size:${({ theme }) => theme.fontSizes.headline100};  
    color: ${({ theme, color }) => color === 'white' ? theme.colors.white : theme.colors.gray};
    
    @media screen and (max-width: 1440px) {
        font-size: ${({ theme }) => theme.fontSizes.headline200};  /* Para tablets */
    }
    @media screen and (max-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSizes.headline300};  /* Para tablets */
    }
    @media screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.fontSizes.headline400};  /* Para tablets */
    }

`;
