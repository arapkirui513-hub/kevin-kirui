type HeartbeatDividerProps = {
  className?: string;
};

export function HeartbeatDivider({
  className = "",
}: HeartbeatDividerProps) {
  return (
    <div
      className={`flex items-center ${className}`}
      aria-hidden="true"
    >
      <div className="h-px flex-1 bg-black/10" />

      <svg
        viewBox="0 0 120 20"
        className="mx-4 h-4 w-20 text-[var(--color-accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 10 H30 L40 10 L48 2 L58 18 L68 6 L76 10 H120" />
      </svg>

      <div className="h-px flex-1 bg-black/10" />
    </div>
  );
}