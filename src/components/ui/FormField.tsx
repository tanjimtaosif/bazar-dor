interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

// FormField
export default function FormField({ label, name, ...props }: FormFieldProps) {
  return (
    <label htmlFor={name} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      <input id={name} name={name} className="input w-full text-base sm:text-sm" {...props} />
    </label>
  );
}
