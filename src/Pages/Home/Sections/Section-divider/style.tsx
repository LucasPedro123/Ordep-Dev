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

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Title = styled.h1`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline100};
    color:  ${({theme})=> theme.colors.white};
    line-height: 87px;
    text-align: center;
`
export const Description = styled.h1`
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    font-weight: ${({theme})=> theme.fontWeight.regular};
    line-height: 30px;
    text-align: center;
    color:  ${({ theme }) => theme.colors.white};
    @media screen and (min-width: 1440px){
        width: 1064px;
    }
`