"use client";
import { motion } from "motion/react";

type Item = {
    icon: React.ReactNode;
    description: string;
    className?: string;
}

export default function Notes({ item }: { item: Item }) {
    return (
        <div
            className={`sm:w-2xs lg:w-3xs lg:h-3xs relative flex justify-center items-center rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-110 transition ${item.className}`}
        >
            <motion.div
                className="absolute top-1 left-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                {item.icon}
            </motion.div>
            <p className="text-sm text-center text-white font-poppins px-2">{item.description}</p>
        </div>
    )
}