import styled from 'styled-components'
import { LineBackground } from '../../assets/Images'


export const Cards = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: -45px;
    padding-inline: 20px;
    @media screen and (max-width: 1440px){
        margin-top: -17px;
    }

    @media screen and (max-width: 768px){
        flex-direction:  column;
        align-items: center;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 35px 40px;
    gap: 10px;

    width: 381px;
    height: 271px;
    background:  ${({theme})=> theme.colors.white};
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const CardImageContainer = styled.div`
    border: 1px solid ${({theme})=> theme.colors.primary500};
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

export const CardImage = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
`

export const CardTitle = styled.h5`
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    font-size: ${({theme})=>theme.fontSizes.paragraphP1};
    line-height: 36px;
    color: ${({theme})=>theme.colors.gray};
`
export const CardDescription = styled.h5`
    font-weight: ${({theme})=>theme.fontWeight.regular};
    font-size: ${({theme})=>theme.fontSizes.paragraphP3};
    color: ${({theme})=>theme.colors.gray};
    line-height: 20px;
    letter-spacing: -0.02em;
`

export const LineBg = styled.div`
    position: absolute;
    top: 244px;
    background-image: url(${LineBackground});
    background-repeat: none;
    width: 100%;
    height: 555px;
    z-index: 0;
`