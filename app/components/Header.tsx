"use client";
import { motion } from 'motion/react'
import { Heart } from "lucide-react"

export default function Header() {

    return (
        <header className="relative top-0 w-full z-50 bg-white-choco backdrop-blur-md shadow-md font-poppins">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col justify-center items-center">
                <motion.h1
                    className="font-semibold text-3xl text-primary flex gap-1 items-center"
                >
                    <Heart size={40} /> San Valentin <Heart size={40} />
                </motion.h1>
                <span className="text-sm text-secondary">
                    Celebremos el dia del amor y la amistad
                </span>
            </div>
        </header>
    )
}