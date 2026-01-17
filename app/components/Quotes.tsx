"use client";

import ScrollReveal from "./ScrollReveal"
import Notes from "./Notes"
import { Heart, Sparkles, Users, PartyPopper } from 'lucide-react'

const items = [
    {
        icon: <Heart size={30} />,
        description: 'Mi corazón es perfecto por que tú estas dentro de él.',
        className: 'gr-valentine-passion mx-4'
    },
    {
        icon: <Sparkles size={30} />,
        description: 'Cada vínculo genuino merece ser celebrado.',
        className: 'gr-valentine-soft'
    },
    {
        icon: <PartyPopper size={30} />,
        description: 'Las mejores cosas suceden de manera inesperada, y así llegaste tú a mi vida.',
        className: 'gr-valentine-rose'
    },
    {
        icon: <Users size={30} />,
        description: 'No hay regalo más valioso que una amistad sincera como la nuestra.',
        className: 'gr-valentine-rose'
    },
]

export default function Quotes() {
    return (
        <>
            <ScrollReveal>
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h3 className="text-3xl font-semibold mb-12 font-poppins">
                            Frases de amor
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {items.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.2} once={false}>
                                    <Notes item={item} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </>
    )
}