interface StatusBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ children, className = "" }: StatusBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 border border-black px-3 py-1 text-xs uppercase tracking-wide ${className}`}>
      <span className="h-2 w-2 rounded-full bg-black" aria-hidden />
      {children}
    </div>
  );
}