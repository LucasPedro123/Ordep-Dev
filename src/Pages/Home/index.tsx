import { IconCardDocumentation, IconCardSupport } from "../../assets/Images"
import { Footer, Header } from "../../Components"
import { Hero, SectionDivider, SectionForms, SectionMobileSolution, SectionProjects, SectionService, SectionTech, SectionWebSolution } from "./Sections"
import * as S from './style'

export const Home: React.FC = () => {
    const CardInfo = [{
        alt: 'Ícone de documentação',
        title: 'Documentação Completa',
        description: 'Receba documentação detalhada para entender e gerenciar seu projeto',
        image: IconCardDocumentation
    }, {
        alt: 'Ícone de chat',
        title: 'Suporte Garantido',
        description: 'Tenha suporte contínuo para manutenção e atualizações futuras.',
        image: IconCardSupport
    }, {
        alt: 'Ícone de chat',
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
                    CardInfo.map((item, index) => (
                        <S.Card
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 50 }}
                            transition={{duration: 0.5, delay: index * 0.2}}
                        >
                            <S.CardImageContainer>
                                <S.CardImage src={item.image} alt={item.alt} />
                            </S.CardImageContainer>
                            <S.CardWrapper>
                                <S.CardTitle>{item.title}</S.CardTitle>
                                <S.CardDescription>{item.description}</S.CardDescription>
                            </S.CardWrapper>
                        </S.Card>
                    ))
                }
            </S.Cards>
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