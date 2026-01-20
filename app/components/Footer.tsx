export default function Footer() {
    return (
        <footer className='bg-background'>
            <div className='max-w-6xl mx-auto px-6 py-5 text-center'>
                <p className='text-lg font-medium text-foreground'>
                    ¡Feliz día de San Valentín!
                </p>

                <p className='mt-3 text-sm text-gray-500'>
                    Amistad, familia, compa&ntilde;&iacute;a y amor.
                </p>

                <hr className='mt-6 h-px w-3xs mx-auto gr-valentine-passion' />

                <p className='mt-6 text-xs text-gray-400'>
                    {new Date().getFullYear()} · Hecho con ❤ por Alejandro
                </p>
            </div>
        </footer>
    )
}