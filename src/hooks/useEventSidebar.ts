import { useContext } from 'react';
import { SideDrawerContext } from '../contexts/SideDrawerContext';

export function useEventSidebar() {
  const { setContent, content, isOpen, setIsOpen } = useContext(SideDrawerContext);
  return { setContent, content, isOpen, setIsOpen };
}