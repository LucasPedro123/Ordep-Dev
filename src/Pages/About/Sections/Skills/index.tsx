import * as S from './style'

const Skills: React.FC = () => {
    const SKillInfo = [
        {
            id: 1,
            name: 'HTML',
            description: '3 anos de experiência',
            icon: 'fa-brands fa-html5'
        },
        {
            id: 2,
            name: 'CSS',
            description: '3 anos de experiência',
            icon: 'fa-brands fa-css3-alt'
        },
        {
            id: 3,
            name: 'JavaScript',
            description: '3 anos de experiência',
            icon: 'fa-brands fa-js'
        },
        {
            id: 4,
            name: 'HTML',
            description: '3 anos de experiência',
            icon: 'fa-brands fa-html5'
        },
        {
            id: 5,
            name: 'React',
            description: '3 anos de experiência',
            icon: 'fa-brands fa-react'
        },
        {
            id: 6,
            name: 'HTML',
            description: '3 anos de experiência',
            icon: 'fa-brands fa-html5'
        },
        {
            id: 7,
            name: 'HTML',
            description: '3 anos de experiência',
            icon: 'fa-brands fa-html5'
        },

    ]

    return (
        <S.Container>
            <S.Content>
                <S.Label>../compotências</S.Label>
                <S.Title>Conhecimentos</S.Title>
            </S.Content>
            <S.CardGroup>
                {SKillInfo.map((e) => (
                    <S.Card key={e.id}>
                        <S.Wrapper>
                            <S.CardTitle>{e.name}</S.CardTitle>
                            <S.Icon className={e.icon} />
                        </S.Wrapper>
                        <S.CardDescription>{e.description}</S.CardDescription>
                    </S.Card>
                ))}

            </S.CardGroup>
        </S.Container>
    )
}

export default Skills;