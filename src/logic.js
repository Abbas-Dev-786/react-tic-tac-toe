let winnerFound = null;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWin = (movs, player, setMovs) => {
  winPattern.forEach((pattern) => {
    if (pattern.every((val) => movs[val] === player)) {
      setTimeout(() => {
        alert(`${player} wins`);
        setMovs(Array.from({ length: 9 }, () => ""));
      }, 300);

      winnerFound = true;
    }
  });
};

export const checkTie = (movs, setMovs) => {
  if (movs.every((mov) => mov !== "") && !winnerFound)
    setTimeout(() => {
      alert("tie");
      setMovs(Array.from({ length: 9 }, () => ""));
    }, 300);
};
