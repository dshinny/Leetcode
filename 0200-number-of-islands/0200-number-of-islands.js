/**
 * @param {character[][]} grid
 * @return {number}
 */

// initialize counter
// sequential iteration through every element
    // if 1, increment counter and use bfs to turn every adjacent 1's to 0's
var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    var counter = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                counter++;
                turnIslandIntoWater(grid, i, j);
            }
        }
    }
    return counter;
};

var turnIslandIntoWater = function(grid, startRow, startCol) {
    const directions = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1]
    ]
    var queue = [[startRow, startCol]];
    while (queue.length) {
        var curr = queue.shift();
        var row = curr[0];
        var col = curr[1];
        if (row < '0' || col < '0' || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') continue;
        grid[row][col] = '0';
        for (var i = 0; i < directions.length; i++) {
            var currDir = directions[i];
            queue.push([row + currDir[0], col + currDir[1]])
        }
    }
}