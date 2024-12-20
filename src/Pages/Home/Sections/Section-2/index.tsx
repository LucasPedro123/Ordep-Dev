import { fadeInImage, fadeInUp } from '../../../../animations/animations.motion';
import { SectionImage2 } from '../../../../assets/Images';
import { Title } from '../../../../Components';
import { Button2 } from '../../../../Components/Button';
import * as S from './style';

const SectionMobileSolution: React.FC = () => {
    return (
        <S.Container
            variants={fadeInUp}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            exit={fadeInUp.exit}
            transition={fadeInUp.transition}
        >
            <S.ImageContainer
                initial={fadeInImage.initial}
                whileInView={fadeInImage.animate}
                exit={fadeInImage.exit}
                transition={fadeInImage.transition}
            >
                <S.Image src={SectionImage2} alt='Imagem de pessoas com um dispositivo móvel atrás'  loading="lazy"/>
            </S.ImageContainer>
            <S.Wrapper>
                <S.Content>
                    <Title content='Vamos Trabalhar Juntos'/>
                    <S.Description>Ao trabalhar conosco, você faz parte de cada etapa do desenvolvimento, garantindo que seu projeto seja entregue exatamente como você imaginou — ou ainda melhor.</S.Description>
                </S.Content>
                <Button2 link='/#contact' content='Saiba Mais'/>
            </S.Wrapper>
        </S.Container>
    )
}

export default SectionMobileSolution;