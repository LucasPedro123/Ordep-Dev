import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 150px;
`
export const Title = styled.h1`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline100};
    line-height: 87px;
    letter-spacing: -0.02em;
    color: ${({theme})=> theme.colors.gray};
`

export const Description = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size:  ${({theme})=> theme.fontSizes.paragraphP2};
    line-height: 30px;
    letter-spacing: -0.02em;
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
    width: 672px;
    @media screen and (max-width: 1440px) {
        width: 568px;
    }
`

export const ImageContainer = styled.div`
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    @media screen and (max-width: 1440px) {
        width: 500px;
    }
`