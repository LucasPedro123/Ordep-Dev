import { SectionImage2 } from '../../../../assets/Images';
import { Button2 } from '../../../../Components/Button';
import * as S from './style';

const SectionMobileSolution: React.FC = () => {
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image src={SectionImage2} />
            </S.ImageContainer>
            <S.Wrapper>
                <S.Content>
                    <S.Title>Vamos Trabalhar Juntos</S.Title>
                    <S.Description>Ao trabalhar conosco, você faz parte de cada etapa do desenvolvimento, garantindo que seu projeto seja entregue exatamente como você imaginou — ou ainda melhor.</S.Description>
                </S.Content>
                <Button2 link='/' content='Saiba Mais' />
            </S.Wrapper>
        </S.Container>
    )
}

export default SectionMobileSolution;