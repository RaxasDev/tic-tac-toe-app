interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CustomButton({ children, onClick }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r 
      from-indigo-500 to-blue-400 px-4 py-3 font-semibold text-white transition hover:opacity-90 hover:cursor-pointer"
    >
      {children}
    </button>
  );
}
