import * as S from './style'
import { SiTypescript, SiJavascript, SiHtml5, SiCsharp } from "react-icons/si";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";

const Skills: React.FC = () => {
    const SKillInfo = [
        {
            id: 1,
            name: 'HTML',
            description: '3 anos de experiência',
            icon: <SiHtml5 />
        },
        {
            id: 2,
            name: 'CSS',
            description: '3 anos de experiência',
            icon: <FaCss3Alt />
        },
        {
            id: 3,
            name: 'JavaScript',
            description: '3 anos de experiência',
            icon: <SiJavascript />
        },
        {
            id: 4,
            name: 'TypeScript',
            description: '3 anos de experiência',
            icon: <SiTypescript />
        },
        {
            id: 5,
            name: 'C#',
            description: '3 anos de experiência',
            icon: <SiCsharp />
        },
        {
            id: 6,
            name: 'React',
            description: '3 anos de experiência',
            icon: <FaReact />
        },
        {
            id: 7,
            name: 'Node',
            description: '3 anos de experiência',
            icon: <FaNodeJs />
        },

    ]

    return (
        <S.Container>
            <S.Content>
                <S.Label>../competências</S.Label>
                <S.Title>Conhecimentos</S.Title>
            </S.Content>
            <S.CardGroup>
                {SKillInfo.map((e) => (
                    <S.Card key={e.id}>
                        <S.Wrapper>
                            <S.CardTitle>{e.name}</S.CardTitle>
                            <S.Icon>
                                {e.icon}
                            </S.Icon>
                        </S.Wrapper>
                        <S.CardDescription>{e.description}</S.CardDescription>
                    </S.Card>
                ))}

            </S.CardGroup>
        </S.Container>
    )
}

export default Skills;