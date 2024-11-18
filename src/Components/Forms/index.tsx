import { IconLocation, IconPapperSubmit } from '../../assets/Images'
import * as S from './style'

export default function Forms () {
    return (
        <S.Content>
            <S.Wrapper>
                <S.WrapperText>
                    <S.Title>Vamos Conversar Mais</S.Title>
                    <S.Description>Entre em contato para discutirmos suas ideias e como posso ajudar a transformá-las em soluções digitais. </S.Description>
                </S.WrapperText>
                <S.Cards>
                    <S.Card>
                        <S.ImageContainer>
                            <S.ImageIcon src={IconLocation} alt='Ícone de localização' loading="lazy" />
                        </S.ImageContainer>
                        <S.CardWrapper>
                            <S.CardTitle>Endereço:</S.CardTitle>
                            <S.CardValue>Brasil, SP, São Paulo</S.CardValue>
                        </S.CardWrapper>
                    </S.Card>
                    <S.Card>
                        <S.ImageContainer>
                            <S.ImageIcon src={IconLocation} alt='Ícone de localização' loading="lazy" />
                        </S.ImageContainer>
                        <S.CardWrapper>
                            <S.CardTitle>E-mail:</S.CardTitle>
                            <S.CardValue>lucaspedrof.dev@gmail.com</S.CardValue>
                        </S.CardWrapper>
                    </S.Card>
                    <S.Card>
                        <S.ImageContainer>
                            <S.ImageIcon src={IconLocation} alt='Ícone de localização' loading="lazy" />
                        </S.ImageContainer>
                        <S.CardWrapper>
                            <S.CardTitle>Telefone:</S.CardTitle>
                            <S.CardValue>+55 (11) 97658-9382</S.CardValue>
                        </S.CardWrapper>
                    </S.Card>
                </S.Cards>
                <S.WrapperIcons>
                    <S.Icon className='fa-brands fa-instagram' />
                    <S.Icon className='fa-brands fa-github' />
                    <S.Icon className='fa-brands fa-linkedin-in' />
                </S.WrapperIcons>
            </S.Wrapper>
            <S.FormContainer>
                <S.FormDescription>Preencha o formulário abaixo e te responderei o mais breve possível.</S.FormDescription>
                <S.Form>
                    <S.Input id='name' name='name' placeholder='Nome*' type='text' />
                    <S.Input id='email' name='email' placeholder='Email*' type='email' />
                    <S.Input id='location' name='location' placeholder='Localização*' type='text' />
                    <S.InputWrapper>
                        <S.InputBudget id='budget' name='budget' placeholder='Orçamento*' type='number' />
                        <S.Input id='subject' name='subject' placeholder='Assunto*' type='text' />
                    </S.InputWrapper>
                    <S.Input id='message' name='message' placeholder='Mensagem*' type='text' />
                </S.Form>
                <S.Button>Enviar<S.IconButton src={IconPapperSubmit} alt='ícone de papel de avião' /></S.Button>
            </S.FormContainer>
        </S.Content>
    )
}