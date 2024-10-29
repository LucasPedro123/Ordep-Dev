import { Button2 } from '../../../../Components/Button'
import * as S from './style'

export const SectionProjects = () => {
    
    return (
        <S.Container>
            <S.Title>Projects</S.Title>
            <S.Wrapper>
                <S.Cards>
                    <S.Card>
                        <S.CardWrapper>
                            <S.CardImage src='https://lirp.cdn-website.com/1984fff8/dms3rep/multi/opt/Captura+de+Tela+2022-02-04+a-s+11.18.01-640w.png'/>
                            <S.CardTitle>Hazel - Clean Minimalist Multi-Pu...</S.CardTitle>
                        </S.CardWrapper>
                        <S.CardLabel>App</S.CardLabel>
                    </S.Card>
                    <S.Card>
                        <S.CardWrapper>
                            <S.CardImage src='https://lirp.cdn-website.com/1984fff8/dms3rep/multi/opt/Captura+de+Tela+2022-02-04+a-s+11.18.01-640w.png'/>
                            <S.CardTitle>Hazel - Clean Minimalist Multi-Pu...</S.CardTitle>
                        </S.CardWrapper>
                        <S.CardLabel>App</S.CardLabel>
                    </S.Card>
                    <S.Card>
                        <S.CardWrapper>
                            <S.CardImage src='https://lirp.cdn-website.com/1984fff8/dms3rep/multi/opt/Captura+de+Tela+2022-02-04+a-s+11.18.01-640w.png'/>
                            <S.CardTitle>Hazel - Clean Minimalist Multi-Pu...</S.CardTitle>
                        </S.CardWrapper>
                        <S.CardLabel>App</S.CardLabel>
                    </S.Card>
                </S.Cards>
                <Button2 link='/' content='Saiba Mais'/>
            </S.Wrapper>
        </S.Container>
    )
}