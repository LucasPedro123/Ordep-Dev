import styled from "styled-components"
import { Footer, Header } from "../../Components"
import { Contacts, Main, Skills } from "./Sections"

export const About: React.FC = () => {
    const BackgroundTop = styled.div`
        height: 100%;
        width: 100%;
        max-width: 1920px;
        z-index: -1;
        background: ${({ theme }) => theme.colors.secondary500}; 
        padding-block-end: 50px;

        @media screen and (min-width: 1440px){
            width: 100vw;       
        }
    `

    return (
        <>
            <BackgroundTop>
                <Header />
                <Main />
            </BackgroundTop>
            <Skills />
            <Contacts />
            <Footer />
        </>
    )
}