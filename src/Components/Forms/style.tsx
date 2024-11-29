import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 5%;
    padding: 88px;
    gap: 24px;
    background: ${({theme})=> theme.colors.white};
    box-shadow: 0px 59px 124px rgba(0, 0, 0, 0.12);
    border-radius: 15px;

    @media screen  and (max-width: 768px) {
        flex-direction: column;
        padding: 64px;
    }
    @media screen  and (max-width: 420px) {
        flex-direction: column;
        padding: 16px;
    }
`

export const Title = styled.h2`
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSizes.headline400};
    color: ${({theme})=> theme.colors.gray};
`

export const Description = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size:  ${({theme})=> theme.fontSizes.paragraphP2};
    color: ${({theme})=> theme.colors.neutral50};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 431px;

    @media screen  and (max-width: 768px) {
        width: 100%;
    }
`

export const WrapperText = styled.article`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen  and (max-width: 768px) {
        text-align: center;
    }
`
export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media screen  and (max-width: 768px) {
        align-items: center;
        width: 100%;
    }  
`
export const Card = styled.div`
    width: 336px;
    height: 96px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 12px 64px rgba(28, 25, 25, 0.12);
    border-radius: 10px;
    padding: 24px;
    display: flex;
    gap: 13px;

    @media screen  and (max-width: 480px) {
        width: 100%;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ImageContainer = styled.div`
    height: 100%;
    padding: 12px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary500};
    @media screen and (max-width: 320px) {
        display: none;
    }
`

export const ImageIcon = styled.img`
    width: 24px;
    height: 24px;
`

export const Icon = styled.i`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary500};
    transition: 300ms ease;

    &:hover{
        color: ${({ theme }) => theme.colors.primary600};
    }
`

export const WrapperIcons = styled.div`
    display: flex;
    gap: 42px;

    @media screen  and (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`
export const CardTitle = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.regular};
    font-size: ${({theme})=> theme.fontSizes.paragraphP4};
    color: ${({theme})=> theme.colors.neutral40};
`

export const CardValue = styled.p`
    font-weight: ${({theme})=> theme.fontWeight.medium};
    font-size: ${({theme})=> theme.fontSizes.paragraphP4};
    color: ${({theme})=> theme.colors.dark};
`

export const FormContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media screen  and (max-width: 768px) {
        width: 100%;
    }
`

export const FormDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.paragraphP2};
    color: ${({theme})=> theme.colors.neutral50};
    font-weight: ${({theme})=> theme.fontWeight.regular};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Input = styled.input`
    border: none;
    padding-bottom: 14px;
    width: 100%;
    font-size:  ${({theme})=> theme.fontSizes.paragraphP2};
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.neutral50};

    &:focus{
        outline: none;
        border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary500};
        
        &::placeholder {
            color: ${({ theme }) => theme.colors.primary500};
        }
    }

    &::placeholder{
        font-size:  ${({theme})=> theme.fontSizes.paragraphP2};
    }
`
export const InputBudget = styled.input`
    border: none;
    padding-bottom: 14px;
    width: 60%;
    font-size:  ${({theme})=> theme.fontSizes.paragraphP2};
    border-bottom: 1.5px solid ${({theme})=> theme.colors.neutral50};
   
    &:focus{
        outline: none;
        border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary500};
        
        &::placeholder {
            color: ${({ theme }) => theme.colors.primary500};
        }
    }

    &::placeholder{
        font-size:  ${({theme})=> theme.fontSizes.paragraphP2};
    }

    @media screen  and (max-width: 480px) {
        width: 100%;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;

    @media screen  and (max-width: 480px) {
        flex-direction: column;
    }
`

export const Button = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 55px;
    background-color: ${({theme})=> theme.colors.primary500};
    color: ${({theme})=> theme.colors.white};;
    border-color: ${({theme})=> theme.colors.primary700};
    font-size: ${({ theme }) => theme.fontSizes.paragraphP3};
    font-weight: ${({theme})=> theme.fontWeight.bold};
    transition: 500ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    &:hover{
        background-color: ${({theme})=> theme.colors.primary700};
    }

    @media screen  and (max-width: 768px) {
        align-self: center;
    }
`

export const IconButton = styled.img`
    width: 24px;
    height: 24px;
`