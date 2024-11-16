import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.section`
    height: 658px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary500};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top: 150px;
`

export const Wrapper = styled(motion.section)`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Title = styled.h2`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline100};
    color:  ${({theme})=> theme.colors.white};
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: ${({theme})=> theme.fontSizes.headline300};
    }
`
export const Description = styled.h1`
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    font-weight: ${({theme})=> theme.fontWeight.regular};
    text-align: center;
    color:  ${({ theme }) => theme.colors.white};
    @media screen and (min-width: 1440px){
        width: 1064px;
    }
`