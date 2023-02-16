import waveIllustration from '../assets/wave.png';
import { EmojiBox } from '../components/EmojiBox';
import { EventCard } from '../components/EventCard';
import { EventDetailsDrawer } from '../components/EventDetailsDrawer';
import { LibraryHeader } from '../components/LibraryHeader';
import { events } from '../helpers/eventsHelper';
import { useEventSidebar } from '../hooks/useEventSidebar';

export function Home() {
  const { content, setIsOpen, isOpen } = useEventSidebar();

  return (
    <div className='w-full h-full flex flex-col gap-10 relative'>
      <LibraryHeader
        title='Biblioteca Farol'
        description='Uma biblioteca de livros, artigos e vídeos sobre desenvolvimento de software.'
        backgroundImage='https://i.imgur.com/i0K7ir9.png'
        location='Colégio Tal, São Paulo'
      />

      <EventDetailsDrawer content={content} isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className='w-full h-full flex flex-col gap-16 px-5'>


        <div className="flex items-center gap-4">
          <div className='rounded-lg p-3 bg-slate-50 w-fit'>
            <img src={waveIllustration} className="w-7 animate-hand-wave" alt="Wave" />
          </div>

          <div className='flex flex-col'>
            <h1 className="text-2xl font-bold text-slate-800">Olá, Ruy!</h1>
            <span className="text-slate-600">Fique sempre por dentro das principais novidades!</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className='flex items-center gap-4'>
            <EmojiBox emoji="📅" />

            <div className='flex flex-col'>
              <h1 className="text-2xl font-bold text-slate-800">Próximos eventos</h1>
              <span className="text-slate-600">Fique sempre por dentro das principais novidades!</span>
            </div>
          </div>

          <div className='w-full gap-8 grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4'>
            { events.map(event => <EventCard {...event} />)}
          </div>
        </div>

      </div>

    </div>
  );
};
