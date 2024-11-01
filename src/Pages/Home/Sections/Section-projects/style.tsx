import styled from 'styled-components'

export const Container = styled.section`
    margin-top: 150px;
`

export const Title = styled.h1`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline100};
    line-height: 84px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 24px;
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`

export const Cards = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`
export const Card = styled.div`
    width: 100%;
    height: 498px;
    background-color: ${({theme})=> theme.colors.white};
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 19px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 27px;
`

export const CardTitle = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.medium};
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    line-height: 23px;
    color: ${({theme})=> theme.colors.gray};
`
export const CardImage = styled.img`
    width: 100%;
    height: 295px;
    object-fit: cover;
`
export const CardLabel = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP3};
    color: ${({theme})=> theme.colors.neutral50};
    line-height: 24px;
`