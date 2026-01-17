"use client";

import { motion } from 'motion/react'

type Props = {
    onFinish: () => void;
}

export default function IntroScreen({ onFinish }: Props) {
    return (
        <motion.div
            className='fixed inset-0 z-100 flex items-center justify-center gr-primary backdrop-blur-md'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            onAnimationComplete={onFinish}
        >
            <motion.img
                src={'/corazon.svg'}
                alt='corazon'
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: [0.4, 1, 0.9, 1.1], opacity: [0.4, 1, 0.7, 1] }}
                transition={{
                    duration: 1.6,
                    ease: 'easeInOut'
                }}
            />
        </motion.div>
    )
}