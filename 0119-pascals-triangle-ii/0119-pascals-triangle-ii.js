/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];
    var temp = [1, 1];
    for (var i = 2; i <= rowIndex; i++) {
        var curr = new Array(i + 1).fill(0);
        curr[0] = 1;
        curr[curr.length - 1] = 1;
        for (var j = 1; j < curr.length - 1; j++) {
            curr[j] = temp[j - 1] + temp[j]; 
        }
        temp = curr;
    }
    return curr;
};