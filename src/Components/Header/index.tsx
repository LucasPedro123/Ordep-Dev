import { useState } from 'react'
import { IconArrowRight, LogoWhite } from '../../assets/Images'
import * as S from './style'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const sidebarVariants = {
    open: {
        clipPath: "circle(2000px at 240px 40px)",
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    closed: {
        clipPath: "circle(100px at 540px 40px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const SidebarItem = motion(S.SidebarItem)

    const links = [
        { title: 'Home', path: '/' },
        { title: 'Sobre', path: '/' },
        { title: 'Serviços', path: '/' },
        { title: 'Projetos', path: '/' }
    ]

    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (!isOpen) {  
            const previous = scrollY.getPrevious();
            if (!previous) return;

            if (latest > previous && latest > 150) {
                setHidden(true);
                console.log("Caiu aqui 1")
            } else {
                setHidden(false);
                console.log("Caiu aqui 2")
            }
        }
    });

    return (
        <S.Container
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
            <S.Wrapper to={'/'}>
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
            <S.Menu onClick={() => setIsOpen(!isOpen)}>
                <S.Svg width="23" height="23" viewBox="0 0 23 23">
                    <motion.path
                        strokeWidth="3"
                        stroke="white"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                          }}
                        animate={isOpen ? "open" : "closed"}
                    />
                    <motion.path
                        strokeWidth="3"
                        stroke="white"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                          }}
                        animate={isOpen ? "open" : "closed"}
                    />
                    <motion.path
                        strokeWidth="3"
                        stroke="white"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                          }}
                        animate={isOpen ? "open" : "closed"}
                    />
                </S.Svg>
            </S.Menu>
            <S.Sidebar animate={isOpen ? 'open' : 'closed'} isOpen={isOpen}>
                <S.SidebarBackground
                    variants={sidebarVariants}
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                />
                <S.SidebarWrapper>
                    <S.Wrapper to={'/'}>
                        <S.Logo src={LogoWhite} />
                        <S.Title>Ordep Dev</S.Title>
                    </S.Wrapper>
                    <S.SidebarBody>
                        <S.SidebarContent>
                            {links.map((item, index) => (
                                <SidebarItem
                                    key={index}
                                    to={`${item.path}`}
                                    animate={isOpen ? 'open' : 'closed'}
                                    whileHover={{ scale: 1.3 }}
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 * index }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {item.title}
                                </SidebarItem>
                            ))}
                        </S.SidebarContent>
                        <S.SidebarButton
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Contatos <S.ArrowRightImage src={IconArrowRight} />
                        </S.SidebarButton>
                    </S.SidebarBody>
                </S.SidebarWrapper>
                <S.WrapperIcons>
                    <S.Icon className='fa-brands fa-instagram' />
                    <S.Icon className='fa-brands fa-github' />
                    <S.Icon className='fa-brands fa-linkedin-in' />
                </S.WrapperIcons>
            </S.Sidebar>
        </S.Container>
    );
}
