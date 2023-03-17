
import { useState } from 'react';
import './App.css';
import Box from './Components/Box';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        alert('O win')
      } else {
        alert('X win')
      }
    } else {
      setTimeout(() => {
        if (!updatedBoard.includes(null)) {
          alert('Game Tie')
          resetBoard()
        };
      }, 200);
    }
    setXPlaying(!xPlaying);
  }

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  }
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
  return (
    <div className="App">
      <Box board={board} onClick={gameOver ? resetBoard : handleBoxClick}></Box>
    </div>
  );
}

export default App;
