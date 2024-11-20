import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconPapperSubmit, LogoWhite } from '../../assets/Images';
import * as S from './style';

export default function Footer() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#main') {
            const mainSection = document.getElementById('main');
            if (mainSection) {
                mainSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const links = [
        { title: 'Home', path: '/#hero' },
        { title: 'Sobre', path: '/about#main' },
        { title: 'Serviços', path: '/#services' },
        { title: 'Projetos', path: '/' }
    ];

    return (
        <S.Container>
            <S.Content>
                <S.WrapperText>
                    <S.Linked to={'/'}>
                        <S.Logo src={LogoWhite} alt='Logo branca' loading="lazy" />
                        <S.Title>Ordep Dev</S.Title>
                    </S.Linked>
                    <S.Description>
                        Ordep Dev was created for the new ways we live and work. We make a better workspace around the world
                    </S.Description>
                </S.WrapperText>
                <S.Column>
                    <S.ColumnName>Redes</S.ColumnName>
                    <S.Value target='_blank' to={'https://www.linkedin.com/in/lucas-pedro-fernandes/'}>LinkedIn</S.Value>
                    <S.Value target='_blank' to={'https://www.instagram.com/lucasfernandes4150/'}>Instagram</S.Value>
                    <S.Value target='_blank' to={'https://github.com/LucasPedro123'}>GitHub</S.Value>
                </S.Column>
                <S.Column>
                    <S.ColumnName>Links</S.ColumnName>
                    {
                        links.map((e, i) => (
                            <S.Value key={i} as={Link} to={e.path}>{e.title}</S.Value> // Usando Link para navegação do React Router
                        ))
                    }
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
    );
}
