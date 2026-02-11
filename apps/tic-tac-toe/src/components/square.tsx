interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  const valueTone = value === "X" ? "text-emerald-300" : "text-amber-300";
  return (
    <button
      onClick={onSquareClick}
      disabled={value !== null}
      className={`flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-slate-700/70 bg-slate-900/80 text-3xl font-black shadow-[0_8px_20px_rgba(15,23,42,0.6)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[0_10px_25px_rgba(16,185,129,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 disabled:cursor-not-allowed disabled:opacity-90 sm:h-24 sm:w-24 sm:text-4xl ${
        value ? valueTone : "text-slate-600"
      }`}
      aria-label={value ? `Square ${value}` : "Empty square"}
    >
      {value ?? ""}
    </button>
  );
}

export default Square;