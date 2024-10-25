import {MainImage } from '../../../../assets/Images';
import {Button1} from '../../../../Components/Button1';
import * as S from './style';

const Hero: React.FC = () => {

    return (
        <S.Container>
            <S.Content>
                <S.Wrapper>
                    <S.Title>Torne ideias em<br /> realidade digital</S.Title>
                    <S.Description>
                        Desenvolvimento de software sob medida para dar vida às suas ideias, em apps
                        móveis, sites ou páginas otimizadas. Crie a solução ideal para o seu negócio.
                    </S.Description>
                    <Button1 content='Comece Agora' link='/'/>
                </S.Wrapper>
                <S.ImageContainer>
                    <S.HeroImage src={MainImage} alt='Imagem principal' />
                </S.ImageContainer>
            </S.Content>
         
        </S.Container>
    );
};

export default Hero;
