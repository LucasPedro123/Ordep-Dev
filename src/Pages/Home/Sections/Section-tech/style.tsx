import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 50px;
    }

    @keyframes rotateAnimation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const Wrapper = styled(motion.article)`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 50%;
    @media screen and (max-width: 768px){
        width: 100%;
    }   
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 768px){
        align-items: center;
        text-align: center;
    }
`

export const Title = styled.h1`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline100};
    line-height: 84px;
    color: ${({ theme }) => theme.colors.gray};
    @media screen and (max-width: 768px){
        font-size: ${({theme})=> theme.fontSizes.headline300};
    }
`

export const Description = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    color:  ${({ theme }) => theme.colors.gray};
    line-height: 30px;
`

export const IconWrapper = styled(motion.div)`
    width: 582px;
    height: 470px;
    position: relative;
`

export const TechIcon = styled.img`
    height: 50%;
`

export const IconCircle1 = styled(motion.div)`
    width: 72.75px;
    height: 72.75px;
    border-radius: 100%;
    
    background: ${({ theme }) => theme.colors.primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 00%;
    transform: translateY(-50%);
    top: 36%;
`
export const IconCircle2 = styled(motion.div)`
    width: 72.75px;
    height: 72.75px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 0%;
`
export const IconCircle3 = styled(motion.div)`
    width: 72.75px;
    height: 72.75px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 00%;
    top: 36%;
    transform: translateY(-50%);

`
export const IconCircle4 = styled(motion.div)`
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 103.93px;
    height: 103.93px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30%;
    z-index: 99;
`
export const IconCircle5 = styled(motion.div)`
    width: 72.75px;
    height: 72.75px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0%;
`
export const IconCircle6 = styled(motion.div)`
    width: 72.75px;
    height: 72.75px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
`
export const IconCircle7 = styled(motion.div)`
    width: 72.75px;
    height: 72.75px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 0%;
`

export const ConnectorBorder1 = styled(motion.div)`
    position: absolute;
    width: 50%;
    height: 60%;
    border-radius: 100%;
    border: 2px dashed ${({ theme }) => theme.colors.primary500};
    right: 36px;
    bottom: 0;
    border: 2px dashed ${({ theme }) => theme.colors.primary500};
`
export const ConnectorBorder2 = styled.div`
    position: absolute;
    width: 50%;
    height: 60%;
    border-radius: 100%;
    border: 2px dashed ${({ theme }) => theme.colors.primary500};
    left: 36px;
    bottom: 0;
    border: 2px dashed ${({ theme }) => theme.colors.primary500};
`
export const ConnectorBorder3 = styled.div`
    position: absolute;
    width: 50%;
    height: 60%;
    border-radius: 100%;
    border: 2px dashed ${({ theme }) => theme.colors.primary500};
    top: 34px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px dashed ${({ theme }) => theme.colors.primary500};
`

export const RotationContainer1 = styled(motion.div)`
    position: absolute;
    width: 60%;
    height: 70%;
    top: 3%;
    left: 20%;
    transform: translateX(-50%);
    animation: rotateAnimation 10s linear infinite;
`;
export const RotationContainer2 = styled(motion.div)`
    position: absolute;
    width: 50%;
    height: 70%;
    left: 36px;
    top: 35%;
    animation: rotateAnimation 10s linear infinite;
`;
export const RotationContainer3 = styled(motion.div)`
    position: absolute;
    width: 60%;
    height: 70%;
    top: 3%;
    left: 20%;
    animation: rotateAnimation 10s linear infinite reverse;
`;
export const RotationContainer4 = styled(motion.div)`
    position: absolute;
    width: 50%;
    height: 70%;
    left: 36px;
    top: 35%;
    animation: rotateAnimation 10s linear infinite reverse;
`;
export const RotationContainer5 = styled(motion.div)`
    position: absolute;
    width: 60%;
    height: 70%;
    right: 0%;
    top: 35%;
    animation: rotateAnimation 10s linear infinite;
`;
export const RotationContainer6 = styled(motion.div)`
    position: absolute;
    width: 60%;
    height: 70%;
    right: 0%;
    top: 35%;
    animation: rotateAnimation 10s linear infinite reverse;
`;