import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 100vw;
    max-width: 1920px;
`

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: -45px;
    padding-inline: 10%; 
       

    @media screen and (max-width: 1440px) {
        padding-inline: 4%; 
        margin-top: -17px;
    }
    
    @media screen and (max-width: 768px){
        flex-direction:  column;
        padding-inline: 20px; 
        align-items: center;
    }

    @media screen and (max-width: 320px) {
        padding-inline: 15px; 
    }
`


export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 35px 40px;
    gap: 10px;

    width: 381px;
    height: 271px;
    background:  ${({ theme }) => theme.colors.white};
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const CardImageContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.primary500};
    border-radius: 100%;
    width: 58px;
    height: 58px;
    padding: 15px;
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

export const CardTitle = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSizes.paragraphP1};
    color: ${({ theme }) => theme.colors.gray};
`
export const CardDescription = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSizes.paragraphP3};
    color: ${({ theme }) => theme.colors.gray};
`