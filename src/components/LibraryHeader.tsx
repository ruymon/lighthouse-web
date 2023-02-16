
interface LibraryHeaderProps {
  title: string;
  description: string;
  location: string;
  backgroundImage: string;
};

export function LibraryHeader({ title, description, backgroundImage, location }: LibraryHeaderProps) {
  return (
    <header className={`w-full h-fit border-b border-slate-100 bg-[url('${backgroundImage}')] bg-no-repeat bg-cover bg-right-bottom`}>
      <div className="w-full flex flex-col gap-4 py-12 px-8 backdrop-blur-sm">
        <span className="text-white mb-4 p-1 rounded bg-red-400 text-xs font-semibold w-fit">{location}</span>
        <h1 className="font-extrabold text-5xl text-slate-800">{title}</h1>
        <p className="font-medium text-lg text-slate-500">{description}</p>
      </div>
    </header>
  );
};
