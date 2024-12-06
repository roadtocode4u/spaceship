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

```js
function isPlayerPresent(places, player) {
  const [a, b, c] = places;
  return board[a] === player && board[b] === player && board[c] === player;
}
```

- Checks if the given player `(player)` occupies all `three positions ` specified in places.
- places: An array of three board indices `(e.g., [0, 1, 2]) `representing a possible winning combination.
- player: The player name or marker `(e.g., "Player1" or "Player2")`.

**How it works**

- Destructure places:
- The array places `(e.g., [0, 1, 2])` is unpacked into variables `a, b, and c` .

**Check Board Values:**

- Compares `board[a]`, `board[b]`, and `board[c]` with player.
- If all three match the player, the function returns true.

```js
function checkWinner() {
  if (isPlayerPresent([0, 1, 2], "Player1")) {
    alert("Player1 wins");
  } else if (isPlayerPresent([3, 4, 5], "Player1")) {
    alert("Player1 wins");
  } else if (isPlayerPresent([6, 7, 8], "Player1")) {
    alert("Player1 wins");
  } else if (isPlayerPresent([0, 4, 8], "Player1")) {
    alert("Player1 wins");
  } else if (isPlayerPresent([2, 4, 6], "Player1")) {
    alert("Player1 wins");
  } else if (isPlayerPresent([0, 3, 6], "Player1")) {
    alert("Player1 wins");
  } else if (isPlayerPresent([1, 4, 7], "Player1")) {
    alert("Player1 wins");
  } else if (isPlayerPresent([2, 5, 8], "Player1")) {
    alert("Player1 wins");
  }

  if (isPlayerPresent([0, 1, 2], "Player2")) {
    alert("Player2 wins");
  } else if (isPlayerPresent([3, 4, 5], "Player2")) {
    alert("Player2 wins");
  } else if (isPlayerPresent([6, 7, 8], "Player2")) {
    alert("Player2 wins");
  } else if (isPlayerPresent([0, 4, 8], "Player2")) {
    alert("Player2 wins");
  } else if (isPlayerPresent([2, 4, 6], "Player2")) {
    alert("Player2 wins");
  } else if (isPlayerPresent([0, 3, 6], "Player2")) {
    alert("Player2 wins");
  } else if (isPlayerPresent([1, 4, 7], "Player2")) {
    alert("Player2 wins");
  } else if (isPlayerPresent([2, 5, 8], "Player2")) {
    alert("Player2 wins");
  }
}
```

- Checks if Player 1 or Player 2 has won the game by occupying any of the possible winning combinations.
- Alerts the winner when a winning condition is met.

**Winning Combinations:**

\*Each isPlayerPresent call checks one of the following combinations:

| Combination Name | Board Indices | Explanation                             |
| ---------------- | ------------- | --------------------------------------- |
| Top Row          | [0, 1, 2]     | All cells in the first row.             |
| Middle Row       | [3, 4, 5]     | All cells in the second row.            |
| Bottom Row       | [6, 7, 8]     | All cells in the third row.             |
| Left Column      | [0, 3, 6]     | All cells in the first column.          |
| Middle Column    | [1, 4, 7]     | All cells in the second column.         |
| Right Column     | [2, 5, 8]     | All cells in the third column.          |
| Main Diagonal    | [0, 4, 8]     | Diagonal from top-left to bottom-right. |
| Anti-Diagonal    | [2, 4, 6]     | Diagonal from top-right to bottom-left. |
|                  |

**For Player 1:**

- Calls isPlayerPresent for each of the `8 winning combinations`.
- If any combination `returns true`, it alerts `"Player1 wins"`.

**For Player 2:**

- Similarly checks all` 8 combinations for "Player2"`.
- Alerts `"Player2 wins"` if a match is found.

** Please do not copy code for assignment **

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
      <p class="current-player" id="current-player">Current Player: Player1</p>
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
      <button type="button" class="reset" onclick="resetBoard()">Reset</button>
    </div>

    <script>
      const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
      let currentPlayer = "Player1";

      const renderBoard = () => {
        const allBoxes = document.querySelectorAll(".cell");
        allBoxes.forEach((box, index) => {
          if (board[index] === "Player2") {
            box.innerHTML = '<img class="player" src="player2.png" alt="X" />';
          } else if (board[index] === "Player1") {
            box.innerHTML = '<img class="player" src="player1.png" alt="O" />';
          } else {
            box.innerHTML = "";
          }
        });
      };
      renderBoard();

      const makeMove = (index) => {
        if (board[index] !== -1) {
          alert("Invalid Move");
          return;
        }

        board[index] = currentPlayer;

        if (currentPlayer === "Player1") {
          currentPlayer = "Player2";
        } else {
          currentPlayer = "Player1";
        }
        const currentPlayerElement = document.getElementById("current-player");
        currentPlayerElement.innerText = `Current Player: ${currentPlayer}`;
        renderBoard();
        checkWinner();
      };

      function resetBoard() {
        board.fill(-1);
        renderBoard();
      }

      function isPlayerPresent(places, player) {
        const [a, b, c] = places;
        return (
          board[a] === player && board[b] === player && board[c] === player
        );
      }

      function checkWinner() {
        if (isPlayerPresent([0, 1, 2], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([3, 4, 5], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([6, 7, 8], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([0, 4, 8], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([2, 4, 6], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([0, 3, 6], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([1, 4, 7], "Player1")) {
          alert("Player1 wins");
        } else if (isPlayerPresent([2, 5, 8], "Player1")) {
          alert("Player1 wins");
        }

        if (isPlayerPresent([0, 1, 2], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([3, 4, 5], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([6, 7, 8], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([0, 4, 8], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([2, 4, 6], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([0, 3, 6], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([1, 4, 7], "Player2")) {
          alert("Player2 wins");
        } else if (isPlayerPresent([2, 5, 8], "Player2")) {
          alert("Player2 wins");
        }
      }
    </script>
  </body>
</html>
```

## Happy coding 🤖
