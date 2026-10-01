/**
 * A rhythm drawn the way Molly Bang draws a feeling: taller means harder,
 * position means when. No labels. Once you have looked at four of these you
 * can pick a pattern out of a list of two hundred without reading a word.
 */
export function Glyph({
  onsets = [],
  accents,
  steps = 16,
  height = 22,
  playhead = null,
  dim = false,
}: {
  onsets?: number[];
  accents?: number[];
  steps?: number;
  height?: number;
  playhead?: number | null;
  dim?: boolean;
}) {
  const w = 100;
  const cell = w / steps;
  const base = height - 2;

  return (
    <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" width="100%" height={height} className="block overflow-visible" aria-hidden>
      {/* Subtle baseline line for the subdivision track */}
      <line
        x1={0}
        y1={base}
        x2={w}
        y2={base}
        stroke="var(--ink)"
        strokeWidth={0.5}
        opacity={0.12}
      />

      {/* The pulse: subtle subdivision ticks */}
      {Array.from({ length: steps }).map((_, i) => (
        <rect
          key={`t${i}`}
          x={i * cell + cell / 2 - 0.25}
          y={base - (i % 4 === 0 ? 3 : 1.8)}
          width={0.5}
          height={i % 4 === 0 ? 3 : 1.8}
          fill="var(--ink)"
          opacity={i % 4 === 0 ? 0.28 : 0.14}
        />
      ))}

      {playhead !== null && playhead >= 0 && (
        <rect x={playhead * cell} y={0} width={cell} height={height} fill="var(--ink)" opacity={0.15} />
      )}

      {onsets.map((s, i) => {
        if (s < 0 || s >= steps) return null;
        const a = accents?.[i] ?? 0.72;
        const h = Math.max(4, 4 + a * (base - 6));
        const hit = playhead === s;
        return (
          <rect
            key={`o${i}-${s}`}
            x={s * cell + cell * 0.16}
            y={base - h}
            width={Math.max(1.6, cell * 0.68)}
            height={h}
            rx={0.8}
            fill="var(--ink)"
            opacity={dim ? 0.3 : hit ? 1 : 0.45}
          />
        );
      })}
    </svg>
  );
}

export function PlayIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', transform: 'translateX(1px)' }}
      aria-hidden="true"
    >
      <path d="M7 4.5V19.5L19 12L7 4.5Z" />
    </svg>
  );
}

export function PauseIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <rect x="6" y="4.5" width="3.5" height="15" rx="0.75" />
      <rect x="14.5" y="4.5" width="3.5" height="15" rx="0.75" />
    </svg>
  );
}
