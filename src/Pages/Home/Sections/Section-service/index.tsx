import { CardVariants } from '../../../../animations/animations.motion';
import { IconServiceDesktop, IconServiceLandingpage, IconServiceMobile, IconServiceWeb } from '../../../../assets/Images';
import { Title } from '../../../../Components';
import * as S from './style'

const SectionService: React.FC = () => {
    const cardServicesInfo = [
        {
            alt: 'Ícone de serviço Mobile',
            image: IconServiceMobile,
            title: 'Contrução de Aplicativos Mobile',
            description: 'Aplicativo móvel personalizado para seu negócio com performance otimizada e uma experiência de usuário fluida. Transforme suas ideias em um app robusto para Android e iOS.'
        },
        {
            alt: 'Ícone de serviço Landing Page',
            image: IconServiceLandingpage,
            title: 'Landing Pages Otimizadas',
            description: 'Aumente suas vendas e gere leads com uma landing page feita sob medida, desenhada para atrair seu público-alvo e maximizar os resultados.'
        },
        {
            alt: 'Ícone de serviço Sistemas Web',
            image: IconServiceWeb,
            title: 'Construção de Sistemas Web',
            description: 'Plataformas web escaláveis e seguras, integradas às melhores tecnologias para otimizar a operação do seu negócio.'
        },
        {
            alt: 'Ícone de serviço Desktop',
            image: IconServiceDesktop,
            title: 'Aplicações Desktop',
            description: 'Soluções desktop desenvolvidas sob medida para as necessidades específicas do seu negócio.'
        },
    ]

    return (
        <S.Container id='services'>
            <Title content='Our services'/>
            <S.Description>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</S.Description>
            <S.Cards>
                {
                    cardServicesInfo.map((e, i) => (
                        <S.Card
                            key={i}
                            variants={CardVariants}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                            transition={{ duration: 0.3 * i }}
                        >
                            <S.ImageContainer>
                                <S.CardImage src={e.image} alt={e.alt} loading="lazy" />
                            </S.ImageContainer>
                            <S.Wrapper>
                                <S.CardTitle>{e.title}</S.CardTitle>
                                <S.CardDescription>{e.description}</S.CardDescription>
                            </S.Wrapper>
                        </S.Card>
                    ))
                }
            </S.Cards>
        </S.Container>
    )
}

export default SectionService;