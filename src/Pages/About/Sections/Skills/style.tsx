import styled from "styled-components";

export const Container = styled.section`
    margin-top: 150px;
`

export const Label = styled.p`
    font-weight: ${(({ theme }) => theme.fontWeight.medium)};
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    color: ${({theme})=> theme.colors.primary500};
`

export const Title = styled.h1`
    font-weight: ${({theme})=>theme.fontWeight.bold};
    font-size: ${(({theme})=> theme.fontSizes.headline200)};
    color: ${({theme})=>theme.colors.gray};

    @media screen and (max-width: 768px){
        font-size: ${(({theme})=> theme.fontSizes.headline300)};

    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const CardGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 60px;
`

export const Card = styled.div`
    padding: 24px;
    width: 100%;
    height: 104px;
    background: rgba(75, 85, 99, 0.2);
    border-radius: 8px;
`

export const CardTitle = styled.p`
    font-weight: ${(({ theme }) => theme.fontWeight.medium)};
    font-size: ${({theme})=> theme.fontSizes.paragraphP3};
    color: #6B7280;
`
export const CardDescription = styled.p`
    font-weight: ${(({ theme }) => theme.fontWeight.regular)};
    font-size: ${({theme})=> theme.fontSizes.paragraphP3};
    color: #6B7280;
    margin-top: 8px;
`

export const Icon = styled.i`
    color: #6B7280;
    font-size: 1.5rem;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;    
`