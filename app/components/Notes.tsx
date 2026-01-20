"use client";
import { motion } from "motion/react";
import type { Item } from "@/utils/interface";

export default function Notes({ item }: { item: Item }) {
    return (
        <motion.div
            className={`sm:w-2xs h-32 lg:w-3xs relative flex justify-center items-center rounded-2xl p-6 shadow-md ${item.className}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="absolute top-1 left-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                {item.icon}
            </motion.div>
            <p className="text-sm text-center text-white font-poppins px-2">{item.description}</p>
        </motion.div>
    )
}