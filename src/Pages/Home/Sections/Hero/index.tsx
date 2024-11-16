import {MainImage } from '../../../../assets/Images';
import {Button3} from '../../../../Components/Button';
import * as S from './style';
import {motion} from 'framer-motion'

const Hero: React.FC = () => {

    const Wrapper = motion(S.Wrapper)
    const ImageContainer = motion(S.ImageContainer)

    return (
        <S.Container>
            <S.BackgroundTop/>
            <S.Content>
                <Wrapper
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{duration: 0.5}}
                >
                    <S.Title>Torne ideias em<br /> realidade digital</S.Title>
                    <S.Description>
                        Desenvolvimento de software sob medida para dar vida às suas ideias, em apps
                        móveis, sites ou páginas otimizadas. Crie a solução ideal para o seu negócio.
                    </S.Description>
                    <Button3 content='Comece Agora' link='/'/>
                </Wrapper>
                <ImageContainer
                    initial={{ opacity: 0, y: 280, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ scale: 0.5, y: 280, opacity: 0 }}
                    transition={{duration: 0.8}}
                >
                    <S.HeroImage src={MainImage} alt='Imagem de pessoas apontando para uma lâmpada' loading="lazy"/>
                </ImageContainer>
            </S.Content>
         
        </S.Container>
    );
};

export default Hero;
