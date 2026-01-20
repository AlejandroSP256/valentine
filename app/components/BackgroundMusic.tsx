"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from 'motion/react'
import { Play, Pause } from "lucide-react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = 0.3;
    }, [])

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause()
        } else (
            audioRef.current.play()
        )

        setIsPlaying(!isPlaying)
    }

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/fondo.mp3" type="audio/mpeg" />
            </audio>

            <motion.button
                onClick={toggleMusic}
                className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-md shadow-md rounded-full p-2 hover:invert transition"
                aria-label="control de musica"
                whileHover={{ scale: 1.1 }}
                transition={{ ease: 'easeIn' }}
            >
                {isPlaying ? <Pause size={24} />: <Play size={24} /> }
            </motion.button>
        </>
    )
}