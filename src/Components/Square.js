import React from "react";
import "../App.css";

function Square({ val, squareChoice }) {
  return (
    <div className="square" onClick={squareChoice}>
      {val}
    </div>
  );
}

export default Square;
