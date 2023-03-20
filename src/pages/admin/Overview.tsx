import { IoCalendarSharp, IoCube, IoNewspaperSharp, IoWarningSharp } from 'react-icons/io5';
import eyesIllustration from '../../assets/eyes.png';
import { EmojiBox } from '../../components/EmojiBox';
import { OverviewDataCard } from '../../components/OverviewDataCard';
import { OverviewEventCard } from '../../components/OverviewEventCard';

export function Overview() {
  return (
    <main className="w-full h-full flex flex-col gap-10 p-6">
      <div className="flex items-center gap-4">
        <div className='rounded-lg p-3 bg-slate-50 w-fit'>
          <img src={eyesIllustration} className="w-7" alt="Emoji de olhos" />
        </div>

        <div className='flex flex-col'>
          <h1 className="text-2xl font-bold text-slate-800">Visão Geral</h1>
          <span className="text-slate-600">Fique sempre por dentro das principais novidades!</span>
        </div>
      </div>

      <section className="flex items-center gap-4 justify-between w-full">
        <OverviewDataCard icon={<IoCube />} dataDescription="Salas sendo utilizadas" dataCurrentValue='15' dataMaxValue='30' />
        <OverviewDataCard icon={<IoNewspaperSharp />} dataDescription="Avisos ativos" dataCurrentValue='1' />
        <OverviewDataCard icon={<IoCalendarSharp />} dataDescription="Eventos programados" dataCurrentValue='12' />
        <OverviewDataCard icon={<IoWarningSharp />} dataDescription="Salas fechadas" dataCurrentValue='1' dataMaxValue='30' />
      </section>

      <div className='flex items-center gap-4'>
        <EmojiBox emoji="📅" />

        <div className='flex flex-col'>
          <h1 className="text-2xl font-bold text-slate-800">Próximos eventos</h1>
          <span className="text-slate-600">Fique sempre por dentro das principais novidades!</span>
        </div>
      </div>

      <section className='w-full gap-5 flex flex-col pb-8'>
        <OverviewEventCard />
        <OverviewEventCard />
        <OverviewEventCard />
      </section>
    </main>
  );
};
