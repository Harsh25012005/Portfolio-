interface StatItem {
  label: string;
  value: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

export function StatsGrid({ stats, className = "" }: StatsGridProps) {
  return (
    <dl className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="border border-neutral-200 p-4">
          <dt className="text-xs uppercase tracking-wide text-neutral-600">{stat.label}</dt>
          <dd className="text-2xl font-semibold">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}