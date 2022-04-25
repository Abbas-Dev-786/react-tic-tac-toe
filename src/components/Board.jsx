import React, { useEffect, useState } from "react";
import { checkWin, checkTie } from "../logic";
import Square from "./Square";

function Board() {
  const [movs, setMovs] = useState(Array.from({ length: 9 }, () => ""));
  const [currentPlayer, setPlayer] = useState("O");

  useEffect(() => {
    checkWin(movs, currentPlayer, setMovs);
    checkTie(movs, setMovs);

    setPlayer(currentPlayer === "X" ? "O" : "X");
    // eslint-disable-next-line
  }, [movs]);

  const handleGameClick = (e) => {
    if (!e.target.classList.contains("square")) return;
    const id = +e.target.id;

    setMovs(
      movs.map((mov, i) => {
        if (i === id && mov === "") return currentPlayer;
        return mov;
      })
    );
  };

  return (
    <>
      <h6>Player {currentPlayer} Chance</h6>
      <div className="board" onClick={handleGameClick}>
        {movs.map((val, i) => (
          <Square key={i} val={val} id={i} />
        ))}
      </div>
    </>
  );
}

export default Board;
