import { ProfileImage } from '../../../../assets/Images';
import { Button3 } from '../../../../Components/Button';
import * as S from './style'

const Main: React.FC = () => {
    const SkillInfo = [
        {
            name: 'Next.js'
        },
        {
            name: 'React.js'
        },
        {
            name: 'TypeScript'
        },
        {
            name: 'Frammer Motion'
        },
        {
            name: 'Redux'
        },
        {
            name: 'Node.js'
        },
        {
            name: 'Asp.net'
        },
    ]

    return (
        <S.Container id='main'>
            <S.BackgroundTop />
            <S.Wrapper>
                <S.Body>
                    <S.Content>
                        <S.Title>Lucas Pedro</S.Title>
                        <S.Description>
                            Desenvolvimento de software sob medida para dar vida às suas ideias, em apps móveis, sites ou páginas otimizadas. Crie a solução ideal para o seu negócio.
                        </S.Description>
                        <S.SkillGroup>
                            {
                                SkillInfo.map((item, index) => (
                                    <S.Skill key={index}>
                                        <S.SkillName>{item.name}</S.SkillName>
                                    </S.Skill>
                                ))
                            }


                        </S.SkillGroup>
                    </S.Content>
                    <S.LinksGroup>
                        <Button3 content='Contato' link='/' />
                        <S.Icon className='fa-brands fa-instagram' />
                        <S.Icon className='fa-brands fa-github' />
                        <S.Icon className='fa-brands fa-linkedin-in' />
                    </S.LinksGroup>
                </S.Body>
                <S.ImageContainer>
                    <S.Image src={ProfileImage} alt='Imagem de Perfil' loading="lazy" />
                </S.ImageContainer>
            </S.Wrapper>
        </S.Container>
    )
}

export default Main;