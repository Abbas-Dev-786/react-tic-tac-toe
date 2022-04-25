import React from "react";

function Square({ id, val }) {
  return (
    <div className="square" id={id}>
      {val}
    </div>
  );
}

export default Square;
