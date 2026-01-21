"use client";

import React, { createContext, useContext, useState } from 'react'
import { UIContextType } from '@/utils/interface';
import { Item } from '@/utils/interface';

const UIContext = createContext<UIContextType | null>(null)

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState<Item | null>(null)

    return (
        <UIContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    if (!context) {
        throw new Error('useUI debe usarse dentro de UIProvider')
    }
    return context
}