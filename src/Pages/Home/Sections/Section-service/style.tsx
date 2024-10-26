import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`

export const Title = styled.h1`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline100};
    color: ${({theme})=> theme.colors.dark};
    line-height: 87px;
    text-align: center;
`

export const Description = styled.p`
    text-align: center;
    margin-top: 24px;
`

export const Cards = styled.div`
    display: grid;
    gap: 37px;
    grid-template-columns: repeat(2, 1fr);
`

export const Card = styled.div`
    padding: 75px 53px;
    width: 499.86px;
    height: 494.22px;
    border-radius: 20px;
    background: ${({theme})=> theme.colors.white};
    box-shadow: 10px 40px 50px rgba(201, 198, 197, 0.4);

    display: flex;
    flex-direction: column;
`

export const CardTitle = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.semibold};
    font-size: ${({theme})=> theme.fontSizes.paragraphP1};
    color:  ${({theme})=> theme.colors.gray};
    line-height: 36px;
`
export const CardDescription = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP3};
    line-height: 20px;

    color: ${({ theme }) => theme.colors.neutral50};
`

export const ImageContainer = styled.div`
    height: 150px;
    margin-bottom: 37px;
    position: relative;
`

export const CardImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 37px;
`


