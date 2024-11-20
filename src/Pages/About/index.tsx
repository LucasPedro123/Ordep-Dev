import { Footer, Header } from "../../Components"
import { Contacts, Main, Skills } from "./Sections"

export const About: React.FC = () => {
    return (
        <>
            <Header />
            <Main />
            <Skills />
            <Contacts />
            <Footer />
        </>
    )
}