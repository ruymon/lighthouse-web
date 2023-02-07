import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface EventCardProps {
  title: string;
  description: string;
  date: Date;
  location: string;
  eventBanner: string;
  speaker: string;
  speakerImage: string;
};

export function EventCard({title, description, date, location, eventBanner, speaker, speakerImage}: EventCardProps) {
  const formattedDate = format(date, 'PPp', { locale: ptBR })

  return (
    <button type="button" className='text-left w-full min-h-32 flex flex-col gap-2 bg-slate-50 rounded-md'>
      <div className="w-full h-32 relative">
        <img src={eventBanner} alt="Event Banner" className="h-full w-full object-cover rounded-t-md" />
        <span className="absolute right-0 bottom-0 px-4 py-1 rounded-tl-md bg-red-400 text-xs text-white font-semibold">{formattedDate}</span>
      </div>

      <div className="flex flex-col p-4 gap-4 justify-between h-full">
        <div className="flex flex-col gap-2">
          <h1 className='text-lg font-bold text-slate-800'>{title}</h1>
          <span className='text-slate-600'>{description}</span>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-slate-600'>{location}</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <img src={speakerImage} alt="Speaker Image" className="w-8 rounded-full" />
          <span className='text-slate-600'>{speaker}</span>
        </div>

      </div>
    </button>
  );
};
