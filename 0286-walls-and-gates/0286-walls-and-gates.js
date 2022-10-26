/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// loop to find all gates
// bfs from gates to all INF
    // for each level out increment

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]
var wallsAndGates = function(rooms) {
    var queue = [];
    for (var i = 0; i < rooms.length; i++) {
        for (var j = 0; j < rooms[i].length; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }
    var length = queue.length;
    var level = 1;
    while (queue.length) {
        if (length === 0) {
            level++;
            length = queue.length;
        }
        var curr = queue.shift();
        length--;
        var row = curr[0];
        var col = curr[1];
        for (var i = 0; i < directions.length; i++) {
            var currDir = directions[i];
            var nextRow = row + currDir[0];
            var nextCol = col + currDir[1];
            if (nextRow < 0 || nextCol < 0 || nextRow >= rooms.length || nextCol >= rooms[0].length) continue;
            if (rooms[nextRow][nextCol] === 2147483647) {
                rooms[nextRow][nextCol] = level;
                queue.push([nextRow, nextCol]);
            }
        }
    }
    return rooms;
};