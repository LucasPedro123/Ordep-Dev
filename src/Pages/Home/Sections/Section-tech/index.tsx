import { IconTechAspNet, IconTechAzure, IconTechFirebase, IconTechMongodb, IconTechNode, IconTechReact, LogoBlue } from '../../../../assets/Images';
import { Button1 } from '../../../../Components/Button';
import * as S from './style';

export const SectionTech = () => {
    return (
        <S.Container>
            <S.IconWrapper>
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
            <S.Wrapper>
                <S.Content>
                    <S.Title>Tecnologias Mais Modernas do Mercado</S.Title>
                    <S.Description>As melhores ferramentas e frameworks utilizadas para garantir que seu projeto seja rápido, seguro e escalável. De desenvolvimento web a mobile, garantimos a melhor solução para cada desafio técnico.</S.Description>
                </S.Content>
                <Button1 content='Saiba Mais' link='/' />
            </S.Wrapper>
        </S.Container>
    )
}