import { createContext, ReactNode, useState } from 'react';
import { IEvent } from '../@types/events';

interface SideDrawerContextData {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: IEvent;
  setContent: (content: IEvent) => void;
}

interface SideDrawerProviderProps {
  children: ReactNode;
}

export const SideDrawerContext = createContext({} as SideDrawerContextData);

export function SideDrawerProvider({ children }: SideDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<IEvent>({} as IEvent);

  return (
    <SideDrawerContext.Provider value={{ isOpen, setIsOpen, content, setContent }}>
      {children}
    </SideDrawerContext.Provider>
  );
}