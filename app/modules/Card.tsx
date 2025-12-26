type CardType = {
  title: string;
  value: string;
  onClick?: (value: string) => void; 
};

export default function Card({ title, value, onClick }: CardType) {
  return (
    <div
      className="
        flex
        rounded-xl
        p-2 w-56
        bg-neutral-900
        border border-neutral-800
        shadow-lg
        hover:shadow-[0_0_20px_rgba(139,92,246,0.7),0_0_30px_rgba(139,92,246,0.5)]
        transform hover:-translate-y-2 hover:scale-105
        transition-all duration-300
        cursor-pointer
        overflow-hidden
      "
      onClick={() => onClick && onClick(value)} 
    >
      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-base font-medium text-neutral-300">{title}</h2>
        <p className="mt-2 text-3xl font-extrabold text-white tracking-tight">{value}</p>
        <div className="mt-4 h-1 w-16 bg-red-300 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.7)] animate-pulse"></div>
      </div>
    </div>
  );
}
