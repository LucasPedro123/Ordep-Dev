import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary500}; 
    height: 64px;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;
`

export const NavLinks = styled(Link)`
    font-weight: ${({theme})=> theme.fontWeight.medium};
    font-size: ${({theme})=> theme.fontSizes.paragraphP2};
    color: ${({theme})=> theme.colors.white};
    line-height: 23px;
`

export const Logo = styled.img`
    width: 37px;
    height: 29px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Title = styled.h5`
    font-size: ${({ theme }) => theme.fontSizes.headline500};
    color: ${({theme})=> theme.colors.white};
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 15px;

    padding: 15px 25px;
    width: 137px;
    height: 52px;
    background: ${({ theme }) => theme.colors.primary500};
    border-radius: 5px;
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size:  ${({ theme }) => theme.fontSizes.paragraphP4};
    line-height: 22px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.white};
    transition: 500ms ease;

    &:hover{
        background-color: ${({theme})=> theme.colors.primary700};
    }
`
export const ArrowRightImage = styled.img`

`