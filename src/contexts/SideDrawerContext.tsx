import { createContext, ReactNode, useState } from 'react';

interface SideDrawerContextData {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: ReactNode;
  setContent: (content: ReactNode) => void;
}

interface SideDrawerProviderProps {
  children: ReactNode;
}

export const SideDrawerContext = createContext({} as SideDrawerContextData);

export function SideDrawerProvider({ children }: SideDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  return (
    <SideDrawerContext.Provider value={{ isOpen, setIsOpen, content, setContent }}>
      {children}
    </SideDrawerContext.Provider>
  );
}