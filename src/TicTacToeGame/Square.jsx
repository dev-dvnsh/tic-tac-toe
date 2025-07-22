import React from "react";

// Individual square component that represents one cell on the tic-tac-toe board
const Square = (props) => {
  return (
    <div
      onClick={props.onClick} // Handle click events from the parent Board component
      className="square" // CSS class for styling the square
      data-value={props.value} // Data attribute used for CSS styling (X, O, or null)
    >
      {/* Display the value (X, O, or empty) inside the square */}
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
