interface OverviewEventCardProps {};

export function OverviewEventCard({}: OverviewEventCardProps) {
  return (
    <div className='rounded-lg w-full bg-white border border-slate-100 flex items-center text-slate-600'>
      <div className="flex flex-col items-center justify-center h-full p-4 bg-slate-400/10 text-slate-500">
        <span className="font-bold text-2xl">10</span>
        <span className="text-sm">Setembro</span>
      </div>

      <div className="bg-slate-50/50 w-full h-full p-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-slate-800">Evento de teste</h1>
          <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-4">
          <span>📍 Sala Ágora</span>
          <span>⏰ Hora: 14:00</span>
        </div>

        <div className="flex items-center gap-2">
          <img className="w-8 rounded-full" src="https://github.com/ruymon.png" alt="Speaker Avatar" />
          <div className="flex flex-col text-sm">
            <span className="font-bold">Ruy Monteiro</span>
            <span className="text-xs">Manicaca @ Layers Education</span>
          </div>
        </div>

      </div>
    </div>
  );
};
