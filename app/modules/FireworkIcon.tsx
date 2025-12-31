// FireworkIcon.tsx
import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  primaryColor?: string;
  accentColor?: string;
  animate?: boolean;
  idSuffix?: string;
};

export default function FireworkIcon({
  width = 36,
  height = 36,
  className = "",
  primaryColor = "#F97316", 
  accentColor = "#F472B6",
  animate = true,
  idSuffix = "",
}: Props) {
  const uid = idSuffix || String(Math.random()).slice(2, 8);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id={`g-core-${uid}`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="1" />
          <stop offset="60%" stopColor={accentColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.05" />
        </radialGradient>

        <linearGradient id={`g-ray-${uid}`} x1="0%" x2="100%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="1" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0.9" />
        </linearGradient>

        <filter id={`f-glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>
          {animate
            ? `
          /* subtle scale and rotate for the whole burst */
          @keyframes fw-pulse-${uid} {
            0% { transform: scale(0.98) rotate(0deg); opacity: 0.98; }
            50% { transform: scale(1.02) rotate(2deg); opacity: 1; }
            100% { transform: scale(0.98) rotate(0deg); opacity: 0.98; }
          }
          .fw-root-${uid} { transform-origin: 50% 50%; animation: fw-pulse-${uid} 2200ms ease-in-out infinite; }

          /* individual spark flicker */
          @keyframes fw-spark-${uid} {
            0% { opacity: 0.95; transform: translateY(0) scale(1); }
            50% { opacity: 0.6; transform: translateY(-1px) scale(1.05); }
            100% { opacity: 0.95; transform: translateY(0) scale(1); }
          }
          .fw-spark-${uid} { animation: fw-spark-${uid} 900ms ease-in-out infinite; transform-origin: center; }

          /* staggered delays for natural effect */
          .fw-spark-${uid}.d1 { animation-delay: 0ms; }
          .fw-spark-${uid}.d2 { animation-delay: 120ms; }
          .fw-spark-${uid}.d3 { animation-delay: 240ms; }
          .fw-spark-${uid}.d4 { animation-delay: 360ms; }
          .fw-spark-${uid}.d5 { animation-delay: 480ms; }
        `
            : ""}
        </style>
      </defs>

      <g className={`fw-root-${uid}`} filter={`url(#f-glow-${uid})`}>
        <g stroke={`url(#g-ray-${uid})`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="32" y1="4" x2="32" y2="14" />
          <line x1="32" y1="50" x2="32" y2="60" />
          <line x1="4" y1="32" x2="14" y2="32" />
          <line x1="50" y1="32" x2="60" y2="32" />

          <line x1="10" y1="10" x2="18" y2="18" />
          <line x1="46" y1="46" x2="54" y2="54" />
          <line x1="10" y1="54" x2="18" y2="46" />
          <line x1="46" y1="18" x2="54" y2="10" />
        </g>

        <g stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
          <line x1="32" y1="12" x2="32" y2="22" />
          <line x1="32" y1="42" x2="32" y2="52" />
          <line x1="12" y1="32" x2="22" y2="32" />
          <line x1="42" y1="32" x2="52" y2="32" />

          <line x1="16" y1="16" x2="22" y2="22" />
          <line x1="42" y1="42" x2="48" y2="48" />
          <line x1="16" y1="48" x2="22" y2="42" />
          <line x1="42" y1="22" x2="48" y2="16" />
        </g>

        <circle cx="32" cy="28" r="6.2" fill={`url(#g-core-${uid})`} opacity="0.98" />

        <g transform="translate(0,-2)">
          <circle className={`fw-spark-${uid} d1`} cx="32" cy="6.5" r="1.6" fill={accentColor} opacity="0.98" />
          <circle className={`fw-spark-${uid} d2`} cx="32" cy="57.5" r="1.6" fill={primaryColor} opacity="0.98" />
          <circle className={`fw-spark-${uid} d3`} cx="6.5" cy="32" r="1.6" fill="#FFD166" opacity="0.98" />
          <circle className={`fw-spark-${uid} d4`} cx="57.5" cy="32" r="1.6" fill="#60A5FA" opacity="0.98" />
          <circle className={`fw-spark-${uid} d5`} cx="18.5" cy="18.5" r="1.2" fill="#A78BFA" opacity="0.95" />
          <circle className={`fw-spark-${uid} d1`} cx="45.5" cy="45.5" r="1.2" fill="#FB7185" opacity="0.95" />
          <circle className={`fw-spark-${uid} d2`} cx="18.5" cy="45.5" r="1.2" fill="#34D399" opacity="0.95" />
          <circle className={`fw-spark-${uid} d3`} cx="45.5" cy="18.5" r="1.2" fill="#FBBF24" opacity="0.95" />
        </g>

        <g opacity="0.9">
          <circle cx="26" cy="8" r="0.7" fill="#FFD166" />
          <circle cx="38" cy="8.5" r="0.7" fill="#F472B6" />
          <circle cx="10" cy="26" r="0.6" fill="#60A5FA" />
          <circle cx="54" cy="26" r="0.6" fill="#34D399" />
          <circle cx="26" cy="54" r="0.6" fill="#FB7185" />
          <circle cx="38" cy="54" r="0.6" fill="#A78BFA" />
        </g>
      </g>
    </svg>
  );
}