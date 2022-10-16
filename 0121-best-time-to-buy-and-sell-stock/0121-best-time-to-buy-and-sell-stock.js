/**
 * @param {number[]} prices
 * @return {number}
 */

// I: array of prices of stock
// O: maximum profit
// C: cannot sell before buy
// E: no profit -> 0

// initialize two pointers, global max
// loop through while right pointer is less than length
    // compare profit (right - left) to global max
    // if right value is less than left value
        // update left to right
        // update right to left + 1
    // right++

var maxProfit = function(prices) {
    var globalMax = 0;
    var left = 0;
    var right = 1;
    while (right < prices.length) {
        var profit = prices[right] - prices[left];
        globalMax = Math.max(profit, globalMax)
        if (prices[right] < prices[left]) {
            left = right;
            right = left + 1;
        } else {
            right++;
        }
    }
    return globalMax;
};