import { IconServiceDesktop, IconServiceLandingpage, IconServiceMobile, IconServiceWeb } from '../../../../assets/Images';
import * as S from './style'

const SectionService: React.FC = () => {
    const cardServicesInfo = [
        {
            image: IconServiceMobile,
            title: 'Contrução de Aplicativos Mobile',
            description: 'Aplicativo móvel personalizado para seu negócio com performance otimizada e uma experiência de usuário fluida. Transforme suas ideias em um app robusto para Android e iOS.'
        },
        {
            image: IconServiceLandingpage,
            title: 'Landing Pages Otimizadas',
            description: 'Aumente suas vendas e gere leads com uma landing page feita sob medida, desenhada para atrair seu público-alvo e maximizar os resultados.'
        },
        {
            image: IconServiceWeb,
            title: 'Construção de Sistemas Web',
            description: 'Plataformas web escaláveis e seguras, integradas às melhores tecnologias para otimizar a operação do seu negócio.'
        },
        {
            image: IconServiceDesktop,
            title: 'Aplicações Desktop',
            description: 'Soluções desktop desenvolvidas sob medida para as necessidades específicas do seu negócio.'
        },
    ]


    return (
        <S.Container>
            <S.Title>Our services</S.Title>
            <S.Description>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</S.Description>
            <S.Cards>
                {
                    cardServicesInfo.map((e) => (
                        <S.Card>
                            <S.ImageContainer>
                                <S.CardImage src={e.image} />
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