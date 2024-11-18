import { fadeInUp } from '../../../../animations/animations.motion';
import { IconTechAspNet, IconTechAzure, IconTechFirebase, IconTechMongodb, IconTechNode, IconTechReact, LogoBlue } from '../../../../assets/Images';
import { Button1 } from '../../../../Components/Button';
import * as S from './style';

const SectionTech = () => {
    return (
        <S.Container
            variants={fadeInUp}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            exit={fadeInUp.exit}
            transition={fadeInUp.transition}
        >
            <S.IconWrapper
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <S.ConnectorBorder1 />
                <S.ConnectorBorder2 />
                <S.ConnectorBorder3 />
                <S.RotationContainer1 >
                    <S.IconCircle1 >
                        <S.TechIcon src={IconTechNode} alt='ícone do Node' loading="lazy" />
                    </S.IconCircle1>
                </S.RotationContainer1>
                <S.RotationContainer2 >
                    <S.IconCircle2>
                        <S.TechIcon src={IconTechAzure} alt='ícone do Azure' loading="lazy" />
                    </S.IconCircle2>
                </S.RotationContainer2>
                <S.RotationContainer3>
                    <S.IconCircle3>
                        <S.TechIcon src={IconTechFirebase} alt='ícone do Firebase' loading="lazy" />
                    </S.IconCircle3>
                </S.RotationContainer3>
                <S.IconCircle4>
                    <S.TechIcon src={LogoBlue} alt='logo' loading="lazy" />
                </S.IconCircle4>

                <S.RotationContainer4>
                    <S.IconCircle5>
                        <S.TechIcon src={IconTechMongodb} alt='ícone do MongoDB' loading="lazy" />
                    </S.IconCircle5>
                </S.RotationContainer4>
                <S.RotationContainer5>
                    <S.IconCircle6>
                        <S.TechIcon src={IconTechAspNet} alt='ícone do AspDotNet' loading="lazy" />
                    </S.IconCircle6>
                </S.RotationContainer5>
                <S.RotationContainer6>
                    <S.IconCircle7>
                        <S.TechIcon src={IconTechReact} alt='ícone do React' loading="lazy" />
                    </S.IconCircle7>
                </S.RotationContainer6>
            </S.IconWrapper>
            <S.Wrapper
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <S.Content>
                    <S.Title>Tecnologias Mais Modernas do Mercado</S.Title>
                    <S.Description>As melhores ferramentas e frameworks utilizadas para garantir que seu projeto seja rápido, seguro e escalável. De desenvolvimento web a mobile, garantimos a melhor solução para cada desafio técnico.</S.Description>
                </S.Content>
                <Button1 content='Saiba Mais' link='/' />
            </S.Wrapper>
        </S.Container>
    )
}

export default SectionTech;