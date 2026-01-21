"use client";

import ScrollReveal from "./ScrollReveal"
import Notes from "./Notes"
import { Heart, Sparkles, Users, PartyPopper, Smile, UserRound, Flower } from 'lucide-react'
import type { Item } from "@/utils/interface";
import Modal from "./Modal";
import { useUI } from "@/context/UIContext";

const items: Item[] = [
    {
        icon: <Heart size={30} color="red" />,
        description: 'Mi corazón es perfecto por que tú estas dentro de él.',
        className: 'gr-valentine-passion mx-4'
    },
    {
        icon: <Sparkles size={30} color="yellow" fill="yellow" />,
        description: 'Cada vínculo genuino merece ser celebrado.',
        className: 'gr-valentine-soft mx-4'
    },
    {
        icon: <PartyPopper size={30} className="text-pink-400" fill="pink" />,
        description: 'Las mejores cosas suceden de manera inesperada, y así llegaste tú a mi vida.',
        className: 'gr-valentine-rose mx-4'
    },
    {
        icon: <Users size={30} />,
        description: 'No hay regalo más valioso que una amistad sincera como la nuestra.',
        className: 'gr-valentine-blue mx-4'
    },
    {
        icon: <Heart size={30} fill="red" />,
        description: 'Me siento afortunada por tenerte en mi vida.',
        className: 'gr-valentine-rose mx-4'
    },
    {
        icon: <Flower size={30} fill="pink" />,
        description: 'Una amiga como tú vale más que cualquier ramo de flores o caja de bombones.',
        className: 'gr-valentine-soft mx-4'
    },
    {
        icon: <Smile size={30} />,
        description: 'La sonrisa es mía, pero el motivo eres tú.',
        className: 'gr-valentine-blue mx-4'
    },
    {
        icon: <UserRound size={30} />,
        description: 'Eres más que un amigo; eres familia.',
        className: 'gr-valentine-passion mx-4'
    },
]

export default function Quotes() {
    const { isOpen, setIsOpen } = useUI();

    return (
        <>
            <ScrollReveal>
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h3 className="text-3xl font-semibold mb-12 font-poppins">
                            Secci&oacute;n de frases
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
                            {items.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.2} once={false}>
                                    <Notes {...item} onClick={() => setIsOpen(item)}/>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>     

            {isOpen && <Modal {...isOpen} onClick={() => setIsOpen(null)} />}
        </>
    )
}