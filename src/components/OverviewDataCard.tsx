import { IoEllipseSharp } from "react-icons/io5";

interface OverviewDataCardProps {
  icon: React.ReactNode;
  dataCurrentValue: string;
  dataMaxValue?: string;
  dataDescription: string;
};

export function OverviewDataCard({ icon, dataCurrentValue, dataMaxValue, dataDescription }: OverviewDataCardProps) {
  return (
    <div className='rounded-lg p-6 w-full bg-slate-50/50 border border-slate-100 flex flex-col gap-5'>
      <div className='flex items-center w-full justify-between gap-10 h-fit'>
        <span className="text-slate-700 text-xl">
          { icon }
        </span>
        <div className='flex items-center gap-2 text-xs font-medium p-1 px-2 rounded bg-purple-100 text-purple-500'>
          <IoEllipseSharp className="animate-pulse"/>
          <span className='font-semibold'>Dados atualizados agora mesmo</span>
        </div>
      </div>

      <hr className='border-b-slate-100 w-full' />

      <div className='flex flex-col gap-1'>
        <div className='flex items-end gap-1'>
          <span className='text-3xl font-semibold'>{ dataCurrentValue }</span>
          <span className='text-slate-500 font-normal'>{dataMaxValue && `/ ${dataMaxValue}`}</span>
        </div>
        <span className="text-slate-500">{ dataDescription }</span>
      </div>
    </div>
  );
};
