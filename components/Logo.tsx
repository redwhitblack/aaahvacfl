export function Logo({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  const ink = light ? "#F4EFE6" : "#121C18";
  const brass = "#C4A574";

  return (
    <span className="inline-flex items-center gap-3">
      <svg
        width={compact ? 34 : 40}
        height={compact ? 34 : 40}
        viewBox="0 0 40 40"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="38" height="38" rx="3" fill="none" stroke={brass} strokeWidth="1.4" />
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fill={ink}
          fontFamily="Georgia, serif"
          fontSize="13"
          letterSpacing="1.4"
        >
          AAA
        </text>
      </svg>
      <span className="leading-none">
        <span
          className="block text-[11px] tracking-[0.28em] uppercase"
          style={{ color: light ? "rgba(244,239,230,0.72)" : "#3A4A43" }}
        >
          Mike Palon
        </span>
        <span
          className="serif block text-[1.15rem] tracking-tight"
          style={{ color: ink }}
        >
          AAA HVAC
        </span>
      </span>
    </span>
  );
}
