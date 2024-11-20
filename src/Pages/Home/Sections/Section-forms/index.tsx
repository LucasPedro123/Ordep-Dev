import { fadeInUp } from '../../../../animations/animations.motion'
import { Forms } from '../../../../Components'
import * as S from './style'

const SectionForms: React.FC = () => {
    return (
        <S.Container
            variants={fadeInUp}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            exit={fadeInUp.exit}
            transition={fadeInUp.transition}
            id='contact'
        >
           <Forms/>
        </S.Container>
    )
}

export default SectionForms;