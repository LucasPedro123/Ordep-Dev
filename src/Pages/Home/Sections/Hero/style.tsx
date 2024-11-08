import styled from "styled-components";

export const Container = styled.main`
    background-color: ${({ theme }) => theme.colors.secondary500};
    height: 728px;
    width: 100%;
    z-index: 2;
    @media screen and (max-width: 1440px){
        height: 525px;
    }

    @media screen and (max-width: 768px){
        padding-block: 100px;
        height: 100%;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 768px){
        flex-direction:  column;
        gap: 50px;
    }
`

export const BackgroundTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 84px;

    width: 100%;
    background: ${({ theme }) => theme.colors.secondary500}; 
`

export const Title = styled.h2`
    font-weight: ${({theme})=>theme.fontWeight.bold};
    font-size: ${(({theme})=> theme.fontSizes.headline200)};
    color: ${({theme})=>theme.colors.white};
    line-height: 77px;

    @media screen and (max-width: 768px){
        font-size: ${(({theme})=> theme.fontSizes.headline300)};

    }
`

export const Description = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    color: ${({theme})=>theme.colors.white};
    line-height: 30px;
    letter-spacing: -0.02em;
`

export const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 731px;
    width: 100%;
    @media screen and (max-width: 768px){
        align-items: center;
        text-align: center;
    }
`


export const HeroImage = styled.img`
    object-fit: contain; 
    pointer-events: none;
    width: 100%;
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 645px;
    user-select: none;
    align-content: center;
    z-index: 2;
`

export const CardImageContainer = styled.div`
    border: 1px solid ${({theme})=> theme.colors.primary200};
    border-radius: 100%;
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

