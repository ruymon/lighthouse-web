import lighthouse from "../assets/lighthouse.svg";

interface LibraryHeaderProps {
  title: string;
  description: string;
  location: string;
  backgroundImage: string;
};

export function LibraryHeader({ title, description, backgroundImage, location }: LibraryHeaderProps) {
  return (
    <header className="w-full flex items-center justify-between h-fit px-8 bg-slate-50 relative border-b border-slate-100">
      <div className="flex-col flex gap-4 py-12">
        <span className="text-white mb-4 p-1 rounded bg-red-400 w-fit text-xs px-2 font-semibold">{location}</span>
        <h1 className="font-extrabold text-5xl text-slate-800">{title}</h1>
        <p className="font-medium text-lg text-slate-500">{description}</p>
      </div>

      <img src={lighthouse} alt="Lighthouse Illustration" className="absolute right-12 bottom-0 h-[calc(100%-15%)]" draggable="false"/>
    </header>
  );
};
