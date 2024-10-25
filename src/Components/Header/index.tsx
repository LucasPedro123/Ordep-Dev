import { IconArrowRight, LogoWhite } from '../../assets/Images'
import * as S from './style'


export const Header: React.FC = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Logo src={LogoWhite} />
                <S.Title>Ordep Dev</S.Title>
            </S.Wrapper>
            <S.Nav>
                <S.NavLinks to={'/'}>Produtos</S.NavLinks>
                <S.NavLinks to={'/'}>Preços</S.NavLinks>
                <S.NavLinks to={'/'}>Sobre</S.NavLinks>
            </S.Nav>
            <S.Button>
                Contatos <S.ArrowRightImage src={IconArrowRight} />
            </S.Button>
        </S.Container>
    )
}