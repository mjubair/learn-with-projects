import type { ReactNode } from "react";

interface InfoProps {
    moves: ReactNode;
    onRematch: () => void;
}

const Info = ({ moves, onRematch }: InfoProps) => {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                    Neon Arena
                </p>
                <p className="text-2xl font-black text-slate-100">Tic Tac Toe</p>
                <p className="text-sm text-slate-300">
                    Challenge a friend and rewrite the board with time travel.
                </p>
            </div>
            <button
                type="button"
                onClick={onRematch}
                className="w-full rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/20"
            >
                Rematch
            </button>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Match Log
                </p>
                <ul className="mt-3 space-y-2">{moves}</ul>
            </div>
        </div>
    );
}

export default Info;