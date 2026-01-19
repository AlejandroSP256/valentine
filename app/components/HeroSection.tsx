import Image from 'next/image'

export default function Hero() {
    return (
        <>
            <section className="relative h-[70vh] md:hidden flex items-center justify-center text-center overflow-hidden">
                <Image
                    src={'/san-valentin.avif'}
                    alt='San Valentín'
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />

                <div className='absolute inset-0 gr-valentine-hero' />

                <div className="relative z-10 max-w-3xl px-6 text-white">
                    <h1 className='font-bold font-poppins text-5xl'>Celebremos el Amor</h1>
                    <p className='mt-6 text-xl font-nunito'>
                        Amor, Amistad y conexiones reales.
                    </p>
                </div>
            </section>

            <section className='relative h-screen max-md:hidden flex items-center justify-center text-center overflow-hidden'>
                <Image
                    src={'/van.jpg'}
                    alt='San Valentín'
                    fill
                    priority
                    sizes='100vw'
                    quality={90}
                    className='object-cover scale-105'
                />

                <div className='absolute inset-0 gr-valentine-hero' />

                <div className="relative z-10 max-w-3xl px-6 text-white">
                    <h1 className='font-bold font-poppins text-6xl'>Celebremos el Amor</h1>
                    <p className='mt-6 text-xl font-nunito'>
                        Amor, Amistad y conexiones reales.
                    </p>
                </div>
            </section>
        </>
    )
}