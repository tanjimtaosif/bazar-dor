interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Container
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
      {children}
    </div>
  );
}
