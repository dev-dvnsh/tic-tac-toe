// Import necessary CSS files for styling and animations
import "./App.css";
import "./animations.css";

// Import the main game board component
import Board from "./TicTacToeGame/Board";

// Main application component that serves as the entry point
function App() {
  return (
    <div className="App">
      {/* Game title with animated gradient text effect */}
      <h1>Tic Tac Toe</h1>
      {/* Main game board component containing all game logic */}
      <Board />
    </div>
  );
}

export default App;
