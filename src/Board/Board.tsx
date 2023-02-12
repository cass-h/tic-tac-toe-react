import React, { useEffect, useState } from "react";
import styles from "./Board.module.css";

export function Board(props: { xStart: boolean }) {
  /*
    We will create a 2D array to store game state, and pass the array and an index to each tile, letting them report their changes.

    We will create a state object to maintain the current turn, and when a tile is clicked, we will update the state based on this information before flipping the switch

    After each turn has passed, we will evaluate if the game is complete.
  */
  type CellType = boolean | null;
  type BoardType = CellType[][];

  const [board, setBoard] = useState<BoardType>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [gameOver, setGameOver] = useState<boolean>(false);

  const [player, setPlayer] = useState(props.xStart);

  function clickTile(x: number, y: number) {
    board[x][y] = player;
    setPlayer(!player);
  }
  function getLabel(value: boolean | null) {
    switch (value) {
      case true:
        return "X";
      case false:
        return "O";
      case null:
        return "-";
    }
  }

  function checkTiles(...cells: CellType[]) {
    if (cells[0] !== null)
      if (cells.every((cell) => cell === cells[0])) {
        console.log(cells[0], " Wins");
        setGameOver(true);
      }
  }

  useEffect(() => {
    // check horizontals
    board.forEach((row) => {
      checkTiles(row[0], row[1], row[2]);
    });
    // check verticals
    board[0].forEach((column, y) => {
      checkTiles(board[0][y], board[1][y], board[2][y]);
    });
    // check diagonals
    checkTiles(board[0][0], board[1][1], board[2][2]);
    checkTiles(board[0][2], board[1][1], board[2][0]);
  }, [player, board]);
  return (
    <div className={styles.grid}>
      {board.map((row, x) =>
        row.map((column, y) => {
          return (
            <button
              className={styles.button}
              key={`${x},${y}`}
              onClick={() => clickTile(x, y)}
              disabled={board[x][y] !== null || gameOver}
            >
              {getLabel(board[x][y])}
            </button>
          );
        })
      )}
    </div>
  );
}
