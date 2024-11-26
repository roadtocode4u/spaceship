---
title: "Tic Tac Toe"
description: " Tic Tac Toe Game"
hide_table_of_contents: true
---

### First create the basic html structure.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
  </head>
  <body>
    <div class="main">
      <h1>Tic Tac Toe</h1>
      <p class="current-player" id="current-player">Current Player: 1</p>
      <div class="game">
        <div class="cell" onclick="makeMove(0)"></div>
        <div class="cell" onclick="makeMove(1)"></div>
        <div class="cell" onclick="makeMove(2)"></div>
        <div class="cell" onclick="makeMove(3)"></div>
        <div class="cell" onclick="makeMove(4)"></div>
        <div class="cell" onclick="makeMove(5)"></div>
        <div class="cell" onclick="makeMove(6)"></div>
        <div class="cell" onclick="makeMove(7)"></div>
        <div class="cell" onclick="makeMove(8)"></div>
      </div>
      <button type="button" class="reset">Reset</button>
    </div>
  </body>
</html>
```

- Each cell has an onclick event listener. When clicked, it calls makeMove with the cell's index `(e.g., 0, 1, ..., 8)`.

### **_NOTE:_** you can add provide css as you

## lets jump to the java-script part...

1. create an array

```js
const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
```

- Each cell in the Tic Tac Toe grid corresponds to an index in this array (0-8).
- The purpose of this array is to keep the track of the game state .
- `-1` it defines the cell is empty

2. create current player

```js
let currentPlayer = "1";
```

- it track whose turn is to play.

3. crate renderBoard function

```js
const renderBoard = () => {
  const allBoxes = document.querySelectorAll(".cell");
  allBoxes.forEach((box, index) => {
    if (board[index] === "0") {
      box.innerHTML = '<img class="player" src="2.png" alt="X" />';
    } else if (board[index] === "1") {
      box.innerHTML = '<img class="player" src="1.png" alt="O" />';
    } else {
      box.innerHTML = "";
    }
  });
};
```

- Purpose: Updates the HTML to match the current state of the board.
- Selects all cells `(.cell)` using `document.querySelectorAll`.
- Loops through each cell and checks the value of `board[index]`
- `"0"`: Displays an image for Player 0.
- `"1"`: Displays an image for Player 1.
- `-1`: Clears the cell.

4. Initial Render

```js
renderBoard();
```

- Calls renderBoard once to set up the board at the start of the game.

5. makeMove Function

```js
const makeMove = (index) => {
  if (board[index] !== -1) {
    alert("Invalid Move");
    return;
  }

  board[index] = currentPlayer;

  if (currentPlayer === "0") {
    currentPlayer = "1";
  } else {
    currentPlayer = "0";
  }

  const currenPlayerElement = document.getElementById("current-player");
  currenPlayerElement.innerText = `Current Player: ${currentPlayer}`;

  renderBoard();
};
```

- Purpose: Handles the player's move and updates the game state.
- Check for a valid move:If `board[index]` is not `-1`, the cell is already occupied. Show an `"Invalid Move"` alert.
- Update the board:Assign the current player's value `("0" or "1")` to the selected cell `(board[index])`.
- Switch players:`Toggle` currentPlayer between `"0" and "1"`.
- Update UI:`Update` the text showing the current player using `document.getElementById`.

- Call renderBoard to visually update the grid.
