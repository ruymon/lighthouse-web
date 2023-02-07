import { ReactNode } from "react";

type ChipColorVariants = 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';

interface ChipProps {
  label: string;
  icon?: ReactNode;
  size?: 'small' | 'base';
  color: ChipColorVariants;
}

export function Chip({ label, icon, color, size }: ChipProps) {
  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded bg-${color}-500/10`}>
      {icon}
      <span className={`font-semibold ${size === 'small' && 'text-xs' } text-${color}-500`}>{label}</span>
    </div>
  );
}