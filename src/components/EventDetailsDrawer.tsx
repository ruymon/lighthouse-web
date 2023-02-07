import { AiOutlineClose } from 'react-icons/ai';
import 'react-modern-drawer/dist/index.css';

import Drawer from 'react-modern-drawer';
import { Chip } from './Chip';

interface EventDetailsDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: React.ReactNode;
}

export function EventDetailsDrawer({isOpen, setIsOpen, content} : EventDetailsDrawerProps) {
  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <Drawer
      lockBackgroundScroll={true}
      open={isOpen}
      onClose={toggleDrawer}
      direction='right'
      className='h-full flex flex-col gap-4 p-5 overflow-y-hidden'
      size={560}
    >
      <div className='w-full'>
        <button className='p-2 w-fit flex items-center gap-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all group'>
          <AiOutlineClose />
          <span className='hidden group-hover:flex leading-none transition-all'>Fechar detalhes</span>
        </button>
      </div>

      <main className='w-full h-full flex flex-col gap-8 overflow-y-auto'>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" className='rounded-md w-full h-32 object-cover' alt="Header" />

        <header className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold text-slate-800'>Criando um app para Android</h2>
          <div className='flex items-center gap-2'>
            <Chip label='Programação' color='emerald' size='small' />
            <Chip label='Workshop' color='red' size='small' />
          </div>
          <span className='text-slate-600'>Entendendo os conceitos base de um desenvolvimento de apps utilizando o Android Studio.</span>
          <span className='text-slate-500 text-sm'>Publicado em 19 de Janeiro de 2023, 12:34</span>
        </header>

        <section className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold text-slate-800'>Detalhes do evento</h3>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <span className='text-slate-600'>Local:</span>
              <span className='text-slate-500'>Sala 1</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-slate-600'>Data:</span>
              <span className='text-slate-500'>19 de Janeiro de 2023, 12:34</span>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-4'>
          <h3 className='text-lg font-bold text-slate-800'>Organizado por</h3>
          <div className='flex gap-4 h-fit items-center'>
            <img className="aspect-square h-full max-h-14 rounded-full" src="https://github.com/ruymon.png" alt="Foto do Organizador" />
            <div className='flex flex-col gap-1'>
              <span className='text-slate-700 text-lg font-semibold'>Ruy Monteiro</span>
              {/* Sample speaker description */}
              <span className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nunc.</span>
            </div>
          </div>
        </section>

      </main>

    </Drawer>
  )
}