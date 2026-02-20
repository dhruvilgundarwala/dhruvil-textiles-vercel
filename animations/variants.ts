import { Variants } from "framer-motion";

// Scroll Animations
export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const scaleUp: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

export const slideIn = {
    left: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 } }
};

export const linkHover: Variants = {
    rest: { width: "0%" },
    hover: {
        width: "100%",
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};
