import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkTied();
    checkWin();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game won by: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const squareChoice = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let winningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          winningPattern = false;
        }
      });

      if (winningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkTied = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No one", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            squareChoice={() => {
              squareChoice(0);
            }}
          />
          <Square
            val={board[1]}
            squareChoice={() => {
              squareChoice(1);
            }}
          />
          <Square
            val={board[2]}
            squareChoice={() => {
              squareChoice(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            squareChoice={() => {
              squareChoice(3);
            }}
          />
          <Square
            val={board[4]}
            squareChoice={() => {
              squareChoice(4);
            }}
          />
          <Square
            val={board[5]}
            squareChoice={() => {
              squareChoice(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            squareChoice={() => {
              squareChoice(6);
            }}
          />
          <Square
            val={board[7]}
            squareChoice={() => {
              squareChoice(7);
            }}
          />
          <Square
            val={board[8]}
            squareChoice={() => {
              squareChoice(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
