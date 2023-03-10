import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className="bg-teal-500 text-white rounded-md py-3 px-6 font-bold flex items-center justify-center gap-1 transition-all hover:bg-teal-600" {...rest }>
      <span>{ children }</span>
    </button>
  );
};
