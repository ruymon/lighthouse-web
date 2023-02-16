import { AiOutlineClose } from 'react-icons/ai';
import 'react-modern-drawer/dist/index.css';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Drawer from 'react-modern-drawer';
import { IEvent } from '../@types/events';
import { Chip } from './Chip';

interface EventDetailsDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: IEvent;
}

export function EventDetailsDrawer({isOpen, setIsOpen, content} : EventDetailsDrawerProps) {
  const { tags, publishedDate, eventDate, title, description, location, speaker, speakerImage, eventBanner } = content;
  
  function toggleDrawer() {
    setIsOpen(!isOpen);
  }
  
  if (!content) return <></>;
  
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
        <button className='p-2 w-fit flex items-center gap-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all group' onClick={toggleDrawer}>
          <AiOutlineClose />
          <span className='hidden group-hover:flex leading-none transition-all'>Fechar detalhes</span>
        </button>
      </div>

      <main className='w-full h-full flex flex-col gap-8 overflow-y-auto'>
        <img src={eventBanner} className='rounded-md w-full h-32 object-cover' alt="Header" />

        <header className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold text-slate-800'>{title}</h2>
          <div className='flex items-center gap-2'>
            {tags && tags.map(tag => <Chip key={tag} size="small" label={tag} color="emerald" />)}
          </div>
          <span className='text-slate-600'>{description}</span>
          <span className='text-slate-500 text-sm'>Publicado em {format(new Date(), 'PPPp', { locale: ptBR })}</span>
        </header>

        <section className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold text-slate-800'>Detalhes do evento</h3>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <span className='text-slate-600'>Local:</span>
              <span className='text-slate-500'>{ location }</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-slate-600'>Data:</span>
              <span className='text-slate-500'>{format(new Date(), 'PPPp', { locale: ptBR })}</span>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-4'>
          <h3 className='text-lg font-bold text-slate-800'>Organizado por</h3>
          <div className='flex gap-4 h-fit items-center'>
            <img className="aspect-square h-full max-h-14 rounded-full" src={speakerImage} alt="Foto do Organizador" />
            <div className='flex flex-col gap-1'>
              <span className='text-slate-700 text-lg font-semibold'>{speaker}</span>
              {/* Sample speaker description */}
              <span className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquet nunc.</span>
            </div>
          </div>
        </section>

      </main>

    </Drawer>
  )
}