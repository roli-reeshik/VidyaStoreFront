type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className = "h-8 w-auto", compact = false }: LogoProps) {
  const width = compact ? 36 : 200;
  const viewBox = compact ? "0 0 36 48" : "0 0 200 48";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      className={className}
      aria-label="AURA STUDIO"
      role="img"
    >
      <rect x="2" y="8" width="32" height="32" rx="8" fill="#0F172A" />
      <path
        d="M12 28L18 16L24 28"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 24H21.5"
        stroke="#4F46E5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="18" r="1.5" fill="#FFFFFF" />
      {!compact && (
        <>
          <text
            x="44"
            y="30"
            fontFamily="'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif"
            fontSize="20"
            fontWeight="800"
            letterSpacing="-0.5px"
            fill="#0F172A"
          >
            AURA
          </text>
          <text
            x="108"
            y="30"
            fontFamily="'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif"
            fontSize="20"
            fontWeight="300"
            letterSpacing="3px"
            fill="#64748B"
          >
            STUDIO
          </text>
        </>
      )}
    </svg>
  );
}
