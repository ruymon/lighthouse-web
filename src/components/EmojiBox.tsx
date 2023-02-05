interface EmojiBoxProps {
  emoji: string;
};

export function EmojiBox({ emoji }: EmojiBoxProps) {
  return (
    <div className='rounded-lg p-3 bg-slate-50 w-fit flex items-center justify-center'>
      <span className="leading-none text-2xl">{emoji}</span>
    </div>
  );
};
