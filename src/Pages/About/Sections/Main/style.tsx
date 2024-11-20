import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    padding-block-start: 10%;
    z-index: 2;
    @media screen and (max-width: 1440px){
        padding-block-start: 7%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${(({ theme }) => theme.fontSizes.headline200)};
    color: ${({ theme }) => theme.colors.white};

    @media screen and (max-width: 768px){
        font-size: ${(({ theme }) => theme.fontSizes.headline300)};

    }
`

export const Description = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSizes.paragraphP2};
    color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`

export const SkillGroup = styled.div`
    display: grid;
    width: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 8px;

    @media screen and (max-width: 1024px){
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
    }
`
export const Skill = styled.div`
    display: grid;
    place-items: center;
    width: max-content;
    height: max-content;
    background-color: ${({ theme }) => theme.colors.primary500};
    border-radius: 8px;
`

export const SkillName = styled.p`
    padding: 4px 12px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSizes.paragraphP2};
    color: ${({ theme }) => theme.colors.white};
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 50%;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`

export const LinksGroup = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    @media screen and (max-width: 1024px){
        justify-content: center;
    }
`

export const Icon = styled.i`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary500};
    transition: 300ms ease;

    &:hover{
        color: ${({ theme }) => theme.colors.primary600};
    }
`

export const Image = styled.img`
    object-fit: contain; 
    pointer-events: none;
    width: 100%;
    height: 100%;
    max-height: 400px;

    border-radius: 8px;
`

export const ImageContainer = styled.div`
    user-select: none;
    z-index: 2;
    overflow: hidden;
    height: 100%;
    max-height: 455px;
`