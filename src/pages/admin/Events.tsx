import { Button } from '../../components/Button';
import { NewEvent } from '../../components/drawer/NewEvent';
import { EmojiBox } from '../../components/EmojiBox';
import { OverviewEventCard } from '../../components/OverviewEventCard';
import { useDrawer } from '../../hooks/useDrawer';

export function Events() {
  const { openDrawer } = useDrawer();

  function handleNewEvent() {
    openDrawer(<NewEvent />);
  }

  return (
    <main className="w-full h-full flex flex-col gap-10 p-6">
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <EmojiBox emoji="📅" />

            <div className='flex flex-col'>
              <h1 className="text-2xl font-bold text-slate-800">Próximos eventos</h1>
              <span className="text-slate-600">Fique sempre por dentro das principais novidades!</span>
            </div>
          </div>

        <Button onClick={handleNewEvent}>Novo evento</Button>
      </div>

      <section className='w-full gap-4 flex flex-col'>
        <OverviewEventCard />
        <OverviewEventCard />
        <OverviewEventCard />
        
      </section>



    </main>
  );
};
