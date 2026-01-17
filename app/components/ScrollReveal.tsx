"use client";

import { motion, type TargetAndTransition, type VariantLabels } from "motion/react";

type Props = {
    children: React.ReactNode;
    once?: boolean;
    delay?: number;
    initial?: boolean | TargetAndTransition | VariantLabels;
    whileInView?: TargetAndTransition | VariantLabels;
    animate?: boolean | TargetAndTransition | VariantLabels;
    whileHover?: TargetAndTransition | VariantLabels;
}

export default function ScrollReveal({
    children,
    delay = 0,
    once = true,
    initial = { opacity: 0, y: 40 },
    whileInView = { opacity: 1, y: 0 },
    animate,
    whileHover
}: Props) {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            animate={animate}
            whileHover={whileHover}
            viewport={{ once, amount: 0.2 }}
            transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay
            }}
        >
            {children}
        </motion.div>
    )
}