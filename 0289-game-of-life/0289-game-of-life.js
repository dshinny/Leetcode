/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
]
var gameOfLife = function(board) {
    var rowLength = board.length;
    var colLength = board[0].length;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var aliveNeighbors = 0;
            for (var k = 0; k < directions.length; k++) {
                var dir = directions[k];
                var row = i + dir[0];
                var col = j + dir[1];
                if (row >= 0 && row < rowLength && col >= 0 && col < colLength) {
                    if (board[row][col] === 1 || board[row][col] === 2) {
                        aliveNeighbors++;
                    }
                }
            }
            if (board[i][j] === 1) {
                if (aliveNeighbors !== 2 && aliveNeighbors !== 3) {
                    board[i][j] = 2;
                }
            } else {
                if (aliveNeighbors === 3) {
                    board[i][j] = 3;
                }
            }
        }
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 0;
            } else if (board[i][j] === 3) {
                board[i][j] = 1;
            }
        }
    }
};