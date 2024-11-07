import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(motion.header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.secondary500}; 
    height: 84px;
    z-index: 997;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
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

export const Wrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
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

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const ArrowRightImage = styled.img`

`

export const Menu = styled.button`
    background: none;
    position: absolute;
    opacity: 0;
    right: 20px;
    top: 20px;
    z-index: 999;
    @media screen and (max-width: 768px){
        display: fixed;
        opacity: 1;
    }
`
export const Svg = styled.svg`
    height: 42px;
    width: 42px;
`

export const Sidebar = styled(motion.div)<{isOpen: boolean | undefined}>`
    padding: 20px;
    height: 100%;
    width: 100%;
    z-index: 998;
    position: fixed;
    display: none;
    flex-direction: column;
    right: 0;
    top: 0;
    justify-content: space-between;
    overflow: hidden;
    @media screen and (max-width: 768px){
        display: ${({ isOpen })=> isOpen ? 'flex' : 'none' };
    }
`

export const SidebarBackground = styled(motion.div)`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary500};
`

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 2;
`
export const SidebarContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`
export const SidebarBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`
export const SidebarButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 15px 25px;
    width: 100%;
    height: 52px;
    background: ${({ theme }) => theme.colors.primary500};
    border-radius: 5px;
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size:  ${({ theme }) => theme.fontSizes.paragraphP4};
    line-height: 22px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 500ms ease;

    &:hover{
        background-color: ${({theme})=> theme.colors.primary700};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary700};
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`

export const SidebarItem = styled(Link)`
    padding: 10px 16px;
    gap: 10px;
    text-align: center;
    width: 100%;
    height: 37px;
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.paragraphP3};
    font-weight: ${({theme})=> theme.fontWeight.medium};
`
export const Icon = styled.i`
    font-size: 2em;
    color: ${({ theme }) => theme.colors.white};
    transition: 300ms ease;

    &:hover{
        color: ${({ theme }) => theme.colors.primary600};
    }
`

export const WrapperIcons = styled.div`
    display: flex;
    gap: 42px;
    z-index: 2;
    padding-block-end: 15px;

    @media screen  and (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`