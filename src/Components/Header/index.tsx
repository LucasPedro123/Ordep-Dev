import { useEffect, useState } from 'react'
import { IconArrowRight, LogoWhite } from '../../assets/Images'
import * as S from './style'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router';

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

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const SidebarItem = motion(S.SidebarItem)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash === '#hero') {
            const mainSection = document.getElementById('hero');
            if (mainSection) {
                mainSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (location.hash === '#contact') {
            const mainSection = document.getElementById('contact');
            if (mainSection) {
                mainSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (location.hash === '#services') {
            const mainSection = document.getElementById('services');
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

    function handleClickContact() {
        navigate('#contact');
    }


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
                <S.Logo src={LogoWhite} alt='Logo Azul' loading="lazy" />
                <S.Title>Ordep Dev</S.Title>
            </S.Wrapper>
            <S.Nav>
                {
                    links.map((link, index) => (
                        <S.NavLinks key={index} to={link.path}>{link.title}</S.NavLinks>
                    ))
                }
            </S.Nav>
            <S.Button onClick={()=> handleClickContact()}>
                Contatos <S.ArrowRightImage src={IconArrowRight} alt='Ícone de seta para a direita' loading="lazy" />
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
                <p>Menu</p>
            </S.Menu>
            <S.Sidebar animate={isOpen ? 'open' : 'closed'} isOpen={isOpen}>
                <S.SidebarBackground
                    variants={sidebarVariants}
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                />
                <S.SidebarWrapper>
                    <S.Wrapper to={'/'}>
                        <S.Logo src={LogoWhite} alt='Logo Azul' />
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
                            onClick={() => {setIsOpen(false), handleClickContact()}}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Contatos <S.ArrowRightImage src={IconArrowRight} alt='Ícone de seta para a direita' loading='lazy' />
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
