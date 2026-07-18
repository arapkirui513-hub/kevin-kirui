type MetricCardProps = {
  label: string;
  value: string;
  description?: string;
};

export function MetricCard({
  label,
  value,
  description,
}: MetricCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <p className="label">{label}</p>

      <p className="mt-3 font-heading text-4xl text-[var(--navy)]">
        {value}
      </p>

      {description && (
        <p className="mt-3 text-sm text-black/60">
          {description}
        </p>
      )}
    </div>
  );
}