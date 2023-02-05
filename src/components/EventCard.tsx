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
  return (
    <div className='w-full min-h-32 flex flex-col gap-2 bg-slate-50 rounded-md'>
      <div className="w-full h-32">
        <img src={eventBanner} alt="Event Banner" className="h-full w-full object-cover rounded-t-md" />
      </div>

      <div className="flex flex-col p-4 gap-4 justify-between h-full">
        <div className="flex flex-col gap-2">
          <h1 className='text-lg font-bold text-slate-800'>{title}</h1>
          <span className='text-slate-600'>{description}</span>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-slate-600'>{date.getUTCDate()}</span>
          <span>&#8729;</span>
          <span className='text-slate-600'>{location}</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <img src={speakerImage} alt="Speaker Image" className="w-8 rounded-full" />
          <span className='text-slate-600'>{speaker}</span>
        </div>

      </div>
    </div>
  );
};
