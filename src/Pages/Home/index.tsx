import { IconCardDocumentation, IconCardSupport } from "../../assets/Images"
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import Hero from "./Sections/Hero"
import SectionWebSolution from "./Sections/Section-1"
import SectionMobileSolution from "./Sections/Section-2"
import { SectionDivider } from "./Sections/Section-divider"
import { SectionForms } from "./Sections/Section-forms"
import { SectionProjects } from "./Sections/Section-projects"
import SectionService from "./Sections/Section-service"
import { SectionTech } from "./Sections/Section-tech"
import * as S from './style'

export const Home: React.FC = () => {
    const CardInfo = [{
        title: 'Documentação Completa',
        description: 'Receba documentação detalhada para entender e gerenciar seu projeto',
        image: IconCardDocumentation
    }, {
        title: 'Suporte Garantido',
        description: 'Tenha suporte contínuo para manutenção e atualizações futuras.',
        image: IconCardSupport
    }, {
        title: 'Soluções Personalizadas',
        description: 'Cada projeto é adaptado às necessidades e metas específicas da sua empresa.',
        image: IconCardSupport
    }]

    return (
        <>
            <Header />
            <Hero />
            <S.Cards>
                {
                    CardInfo.map(item => (
                        <S.Card>
                            <S.CardImageContainer>
                                <S.CardImage src={item.image} />
                            </S.CardImageContainer>
                            <S.CardWrapper>
                                <S.CardTitle>{item.title}</S.CardTitle>
                                <S.CardDescription>{item.description}</S.CardDescription>
                            </S.CardWrapper>
                        </S.Card>
                    ))
                }
            </S.Cards>
            <S.LineBg />
            <SectionWebSolution />
            <SectionMobileSolution />
            <SectionService />
            <SectionDivider />
            <SectionProjects />
            <SectionTech />
            <SectionForms />
            <Footer/>
        </>
    )
}