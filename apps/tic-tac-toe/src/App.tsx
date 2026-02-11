import { useState } from "react";
import Board from "./components/board";
import Info from "./components/info";

type SquareValue = "X" | "O" | null;

function App() {
  const [history, setHistory] = useState<Array<Array<SquareValue>>>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<SquareValue>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function handleRematch() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((_squares, move) => {
    let description = "Go to game start";
    if (move > 0) {
      description = "Go to move #" + move;
    }
    const isCurrentMove = move === currentMove;
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          disabled={isCurrentMove}
          className={`w-full rounded-lg border px-3 py-2 text-left text-sm font-semibold transition ${
            isCurrentMove
              ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-200"
              : "border-slate-700/60 bg-slate-900/60 text-slate-200 hover:border-emerald-400/40 hover:bg-emerald-400/10"
          }`}
        >
          {isCurrentMove ? "You are at move #" + move : description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 lg:flex-row">
        <div className="w-full lg:w-2/3">
          <div className="rounded-3xl border border-emerald-400/40 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(16,185,129,0.25)] backdrop-blur animate-rise">
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.6)] backdrop-blur animate-fade-in">
            <Info moves={moves} onRematch={handleRematch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
