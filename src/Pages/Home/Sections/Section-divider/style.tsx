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

    @media screen and (max-width: 768px) {
        height: 100%;
        padding-block: 100px;
    }
`

export const Wrapper = styled(motion.section)`
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;
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