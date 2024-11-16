import { IconPapperSubmit, LogoWhite } from '../../assets/Images'
import * as S from './style'

export const Footer: React.FC = () => {
    return (
        <S.Container>
            <S.Content>
                <S.WrapperText>
                    <S.Linked to={'/'}>
                        <S.Logo src={LogoWhite} alt='Logo branca' loading="lazy" />
                        <S.Title>Ordep Dev</S.Title>
                    </S.Linked>
                    <S.Description>Ordep Dev was created for the new ways we live and work. We make a better workspace around the world</S.Description>
                </S.WrapperText>
                <S.Column>
                    <S.ColumnName>Redes</S.ColumnName>
                    <S.Value to={'/'}>LinkedIn</S.Value>
                    <S.Value to={'/'}>Instagram</S.Value>
                    <S.Value to={'/'}>GitHub</S.Value>
                </S.Column>
                <S.Column>
                    <S.ColumnName>Links</S.ColumnName>
                    <S.Value to={'/'}>Sobre</S.Value>
                    <S.Value to={'/'}>Projetos</S.Value>
                    <S.Value to={'/'}>Contato</S.Value>
                </S.Column>
                <S.WrapperForm>
                    <S.Title>Newsletter</S.Title>
                    <S.Description2>Deixe seu E-mail</S.Description2>
                    <S.InputWrapper>
                        <S.Input placeholder='Seu E-mail' type='email' name='email' />
                        <S.Button><S.ImagePaper src={IconPapperSubmit} alt='ícone de papel de avião' /></S.Button>
                    </S.InputWrapper>
                </S.WrapperForm>
            </S.Content>
            <S.Wrapper>
                <S.Description2>© 2024.All Rights Reserved.</S.Description2>
            </S.Wrapper>
        </S.Container>
    )
}