import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
    display: flex;
    justify-content: space-between;
    margin-top: 150px;

    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
        gap: 60px;
    }
`

export const Description = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size:  ${({theme})=> theme.fontSizes.paragraphP2};
    color: ${({theme})=> theme.colors.gray};
`


export const Content = styled.article`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 632px;
    @media screen and (max-width: 1440px) {
        width: 528px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ImageContainer = styled(motion.div)`
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;

    @media screen  and (max-width: 768px) {
        width: 100%;
    }
`