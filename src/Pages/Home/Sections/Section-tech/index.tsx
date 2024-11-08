import { fadeInUp } from '../../../../animations/animations.motion';
import { IconTechAspNet, IconTechAzure, IconTechFirebase, IconTechMongodb, IconTechNode, IconTechReact, LogoBlue } from '../../../../assets/Images';
import { Button1 } from '../../../../Components/Button';
import * as S from './style';

export const SectionTech = () => {
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
                <S.IconCircle1>
                    <S.TechIcon src={IconTechNode} />
                </S.IconCircle1>
                <S.IconCircle2>
                    <S.TechIcon src={IconTechAzure} />
                </S.IconCircle2>
                <S.IconCircle3>
                    <S.TechIcon src={IconTechFirebase} />
                </S.IconCircle3>
                <S.IconCircle4>
                    <S.TechIcon src={LogoBlue} />
                </S.IconCircle4>
                <S.IconCircle5>
                    <S.TechIcon src={IconTechMongodb} />
                </S.IconCircle5>
                <S.IconCircle6>
                    <S.TechIcon src={IconTechAspNet} />
                </S.IconCircle6>
                <S.IconCircle7>
                    <S.TechIcon src={IconTechReact} />
                </S.IconCircle7>
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