import waveIllustration from '../assets/wave.png';

export function Home() {
  return (
    <div className='w-full h-full p-5 px-6'>
      <header className="flex items-center gap-4 flex border-b border-slate-100 pb-6">
        <div className='rounded-lg p-3 bg-slate-50 w-fit'>
          <img src={waveIllustration} className="w-7 animate-hand-wave" alt="Wave" />
        </div>
        
        <div className='flex flex-col'>
          <h1 className="text-2xl font-bold text-slate-800">Olá, Ruy!</h1>
          <span className="text-slate-600">Fique sempre por dentro das principais novidades!</span>
        </div>
      </header>
    </div>
  );
};
