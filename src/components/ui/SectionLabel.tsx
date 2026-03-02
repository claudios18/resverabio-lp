interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`text-xs uppercase tracking-[0.2em] font-medium text-gray-500 ${className}`}>
      {children}
    </span>
  );
}
