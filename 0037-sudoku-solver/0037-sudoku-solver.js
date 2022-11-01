/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    // set up hashmap
    const n = board.length;
    const boxes = new Array(n);
    const rows = new Array(n);
    const cols = new Array(n);
    for (var i = 0; i < n; i++) {
        boxes[i] = {};
        rows[i] = {};
        cols[i] = {};
    }
    for (var r = 0; r < n; r++) {
        for (var c = 0; c < n; c++) {
            if (board[r][c] !== '.') {
                const val = board[r][c];
                const boxId = getBoxId(r, c);
                boxes[boxId][val] = true;
                rows[r][val] = true;
                cols[c][val] = true;
            }
        }
    }
    solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const solveBacktrack = function (board, boxes, rows, cols, r, c) {
  if (r === board.length || c === board[0].length) {
    return true;
  } else {
    if (board[r][c] === '.') {
      for (let num = 1; num <= 9; num++) {
        const numVal = num.toString();
        board[r][c] = numVal;

        const boxId = getBoxId(r, c);
        const box = boxes[boxId];
        const row = rows[r];
        const col = cols[c];

        if (isValid(box, row, col, numVal)) {
          box[numVal] = true;
          row[numVal] = true;
          col[numVal] = true;

          if (c === board[0].length - 1) {
            if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
              return true;
            }
          } else {
            if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
              return true;
            }
          }

          delete box[numVal];
          delete row[numVal];
          delete col[numVal];
        }

        board[r][c] = '.';
      }
    } else {
      if (c === board[0].length - 1) {
        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
          return true;
        }
      } else {
        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
          return true;
        }
      }
    }
  }

  return false;
};

var getBoxId = function(row, col) {
    const colVal = Math.floor(col / 3);
    const rowVal = Math.floor(row / 3) * 3;
    return colVal + rowVal;
}

var isValid = function(box, row, col, num) {
    if (box[num] || row[num] || col[num]) return false;
    return true;
}