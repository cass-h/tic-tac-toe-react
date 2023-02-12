import React, { useState } from "react";
import styles from "./Board.module.css";

export function Board(props: { xStart: boolean }) {
  /*
    We will create a 2D array to store game state, and pass the array and an index to each tile, letting them report their changes.

    We will create a state object to maintain the current turn, and when a tile is clicked, we will update the state based on this information before flipping the switch

    After each turn has passed, we will evaluate if the game is complete.
  */
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [player, setPlayer] = useState(props.xStart);
  return <div className={styles.grid}></div>;
}
