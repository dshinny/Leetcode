/**
 * @param {number} n
 * @return {number}
 */

// steps(i) = steps(i - 1) + steps(i - 2)
var climbStairs = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    var prev = 1;
    var curr = 2;
    for (var i = 2; i < n; i++) {
        var temp = prev + curr;
        prev = curr;
        curr = temp;
    }
    return curr;
};