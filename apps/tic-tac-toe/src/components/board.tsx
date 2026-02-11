import Square from "./square";

type SquareValue = "X" | "O" | null;

function calculateWinner(squares: Array<SquareValue>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

interface BoardProps {
  xIsNext: boolean;
  squares: Array<SquareValue>;
  onPlay: (nextSquares: Array<SquareValue>) => void;
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square) && !winner;
  const status = winner
    ? "Winner: " + winner
    : isDraw
    ? "Draw"
    : "Next player: " + (xIsNext ? "X" : "O");
  const statusTone = winner
    ? "text-emerald-300"
    : isDraw
    ? "text-amber-300"
    : "text-sky-300";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-full border border-slate-700/70 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
        <span className={`drop-shadow ${statusTone}`}>{status}</span>
        <span className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-200">
          Arcade Match
        </span>
      </div>
      <div className="mx-auto grid w-fit grid-cols-3 place-items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3 shadow-inner">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
