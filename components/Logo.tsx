export function Logo({
  light = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  const ink = light ? "#F4EFE6" : "#121C18";
  const brass = "#C4A574";

  return (
    <span className="inline-flex items-center gap-3">
      <svg width={40} height={40} viewBox="0 0 40 40" aria-hidden="true">
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="3"
          fill="none"
          stroke={brass}
          strokeWidth="1.4"
        />
      </svg>
      <span
        className="serif block text-[1.15rem] tracking-tight"
        style={{ color: ink }}
      >
        Coming soon
      </span>
    </span>
  );
}
