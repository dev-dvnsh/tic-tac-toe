import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  // Game state: array of 9 elements representing the board squares (null, "X", or "O")
  const [state, setState] = useState(Array(9).fill(null));
  // Turn tracking: true for X's turn, false for O's turn
  const [isXTurn, setIsXTurn] = useState(true);

  // Function that checks if there's a winner by examining all possible winning combinations
  const checkWinner = () => {
    // All possible winning combinations on a tic-tac-toe board
    const winnerLogic = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Main diagonal (top-left to bottom-right)
      [2, 4, 6], // Anti-diagonal (top-right to bottom-left)
    ];
    // Check each winning combination to see if three squares match
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a]; // Return the winner ("X" or "O")
    }
    return false; // No winner found
  };

  // Determine current game status
  const isWinner = checkWinner();
  const isDraw = !isWinner && state.every(square => square !== null);
  
  // Handle player moves when a square is clicked
  const handleClick = (index) => {
    // Prevent moves on occupied squares or after game ends
    if (state[index] !== null || isWinner) {
      return;
    }
    // Create a copy of the game state to avoid direct mutation
    const copyState = [...state];
    // Place the current player's mark in the clicked square
    copyState[index] = isXTurn ? "X" : "O";
    // Update the game state and switch turns
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
  
  // Reset the game to its initial state
  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true); // X always goes first
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <div className="winner-message">
           Player {isWinner} wins the game! 
          <button className="play-again-btn" onClick={handleReset}>
            Play Again
          </button>
        </div>
      ) : isDraw ? (
        <div className="winner-message" style={{background: 'linear-gradient(145deg, var(--warning-color), #e67e22)'}}>
           It's a draw! 
          <button className="play-again-btn" onClick={handleReset}>
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="game-status">
            <h4>Player {isXTurn ? "X" : "O"}'s Turn</h4>
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
