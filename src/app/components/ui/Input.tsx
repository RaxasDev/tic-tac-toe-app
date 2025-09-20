import { UserCircle } from 'lucide-react';

interface IInputProps {
  label: string;
  placeholder: string;
  color: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
}

export default function CustomInput({
  label,
  placeholder,
  color,
  icon,
  value,
  onChange,
  error,
}: IInputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="flex items-center gap-2 font-bold text-white">
        {icon ? icon : <UserCircle className={`${color}`} size={20} />}
        <span className={color}>{label}</span>
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`rounded-lg bg-[#0b0d10] px-4 py-2 text-white placeholder-gray-400 border ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-700 focus:ring-indigo-500'
        } focus:outline-none focus:ring-2`}
      />
    </div>
  );
}
