"use client";

import { motion, AnimatePresence } from 'motion/react'
import { Item } from '@/utils/interface';
import { useUI } from '@/context/UIContext';

export default function Modal({ icon, description, className }: Item) {
    const { isOpen, setIsOpen } = useUI()

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        role='dialog'
                        aria-modal='true'
                    >
                        <motion.div
                            className={`relative w-full max-w-sm rounded-2xl p-6 shadow-lg text-center ${className}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className='absolute top-4 right-4'
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <button
                                    className='text-white bg-black/80 rounded-full p-1 cursor-pointer'
                                    onClick={() => setIsOpen(null)}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </button>
                            </motion.div>

                            <div className='mb-4'>
                                <div className='flex items-center justify-center mb-4 text-2xl font-bold'>
                                    {icon}
                                </div>
                                <p className='text-sm text-white font-poppins'>{description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}