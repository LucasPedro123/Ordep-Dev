export const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
    transition: { duration: 0.5 },
};

export const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
};
export const fadeInImage = {
    initial: { y: 100, scale: 0.5, opacity: 0 },
    animate: {y: 0, scale: 1, opacity: 1},
    exit: { opacity: 0, y: 0, scale: 0.5 },
    transition: { duration: 0.5 },
};

export const CardVariants = {
    initial: { opacity: 0, scale: 0.5, x: -50 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.5, x: -50 }
}