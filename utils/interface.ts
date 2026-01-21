export type Item = {
    icon: React.ReactNode;
    description: string;
    className?: string;
    onClick?: () => void;
}

export interface UIContextType {
    isOpen: Item | null;
    setIsOpen: (item: Item | null) => void;
}