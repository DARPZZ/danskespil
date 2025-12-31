// Card.tsx
import React from "react";
import FireworkIcon from "./FireworkIcon";
type CardType = {
  title: string;
  value: string;
  subtitle?: string;
  pengePåBet?: string;
  icon?: React.ReactNode;
  onClick?: (value: string) => void;
  className?: string;
  muligGevinst?: string;
};


export default function Card({
  title,
  value,
  subtitle,
  pengePåBet,
  icon,
  onClick,
  className = "",
  muligGevinst,
}: CardType) {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick(value)}
      className={
        `group relative flex flex-col items-start gap-3 w-64 p-4 rounded-2xl
         bg-linear-to-br from-neutral-900 via-neutral-950 to-neutral-900
         border border-neutral-800 shadow-[0_6px_30px_rgba(0,0,0,0.6)]
         hover:shadow-[0_0_30px_rgba(99,102,241,0.18),0_8px_40px_rgba(139,92,246,0.12)]
         transform transition-all duration-300
         focus:outline-none focus:ring-4 focus:ring-purple-600/20
         ${className}`
      }
      aria-label={title}
    >
      <div className="flex items-center w-full">
        <div
          className="flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-tr
                     from-purple-700 to-indigo-600 text-white shadow-md"
        >
          {icon ?? (
            <FireworkIcon width={26} height={26} animate={true}accentColor="#34D399" />
          )}
        </div>

        <div className="ml-3 flex-1 text-left">
          <h3 className="text-sm font-semibold text-neutral-200">{title}</h3>
          {subtitle && <p className="mt-1 text-xs text-neutral-400">{subtitle}</p>}
        </div>

        <div className="ml-3 text-right">
          <p className="text-lg font-extrabold text-white">{value}</p>
          {pengePåBet && <p className="text-xs text-rose-300 mt-1">{pengePåBet}</p>}
        </div>
      </div>

      <div className="flex w-full flex-row text-left text-lg">
        <p className="flex-1">Mulig gevinst</p>
        <p className="text-green-400">{muligGevinst}</p>
      </div>

      <div className="mt-3 w-full">
        <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-linear-to-r from-purple-500 to-indigo-400 group-hover:animate-pulse transition-all duration-500" />
        </div>
      </div>
    </button>
  );
}