import { createContext, ReactNode, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

interface DrawerContextData {
  openDrawer: (data: ReactNode) => void;
  closeDrawer: () => void;
  isOpen: boolean;
}

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerContext = createContext({} as DrawerContextData);

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  function openDrawer(data: ReactNode) {
    setContent(data);
    setIsOpen(true);
  }

  function closeDrawer() {
    setContent(null);
    setIsOpen(false);
  }

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer, isOpen }}>
      <Drawer
        lockBackgroundScroll={true}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction='right'
        className='h-full flex flex-col gap-4 p-5 overflow-y-hidden'
        size={560}
      >
        <div className='w-full'>
          <button className='p-2 w-fit flex items-center gap-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all group' onClick={closeDrawer}>
            <AiOutlineClose />
            <span className='hidden group-hover:flex leading-none transition-all'>Fechar detalhes</span>
          </button>
        </div>

        <main className='w-full h-full flex overflow-y-auto'>
          {content}
        </main>
      </Drawer>

      {children}
    </DrawerContext.Provider>
  );
}