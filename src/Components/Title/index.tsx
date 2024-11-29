import * as S from './style'

interface TitleProp {
    content: string;
    color?: string;
}

const Title : React.FC<TitleProp>= (prop) => {
    
    return (
        <S.Title color={prop.color}>
            {prop.content}
        </S.Title>
    )
}

export default Title;