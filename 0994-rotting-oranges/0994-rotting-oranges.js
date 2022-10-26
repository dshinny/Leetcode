/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    if (grid.length === 0) return 0;
    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]
    var freshCounter = 0;
    var queue = [];
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
            if (grid[i][j] === 1) {
                freshCounter++;
            }
        }
    }
    
    let currLength = queue.length;
    let minutes = 0;
    while (queue.length) {
        if (currLength === 0) {
            minutes++;
            currLength = queue.length;
        }
        var curr = queue.shift();
        currLength--;
        var row = curr[0];
        var col = curr[1];
        for (var i = 0; i < directions.length; i++) {
            var currDir = directions[i];
            var nextRow = row + currDir[0];
            var nextCol = col + currDir[1];
            if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length) continue;
            if (grid[nextRow][nextCol] === 1) {
                grid[nextRow][nextCol] = 2;
                queue.push([nextRow, nextCol])
                freshCounter--;
            }
        }
    }
    if (freshCounter !== 0) return -1;
    return minutes;
};