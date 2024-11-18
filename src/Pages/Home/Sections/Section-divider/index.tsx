import { fadeInUp } from '../../../../animations/animations.motion'
import { Button3 } from '../../../../Components/Button'
import * as S from './style'

const SectionDivider = () => {


    return (
        <S.Container>
            <S.Wrapper
                variants={fadeInUp}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                exit={fadeInUp.exit}
                transition={fadeInUp.transition}
            >
                <S.Title>Leve Suas Ideias para o <br/> Próximo Nível</S.Title>
                <S.Description>Não importa onde você esteja, transformamos suas ideias em realidade digital, seja para um novo site, plataforma ou aplicativo. Com processos ágeis e comunicação direta, você acompanha cada etapa do desenvolvimento.</S.Description>
            </S.Wrapper>
            <Button3 link='/' content='Comece Agora' />
        </S.Container>
    )
}

export default SectionDivider;