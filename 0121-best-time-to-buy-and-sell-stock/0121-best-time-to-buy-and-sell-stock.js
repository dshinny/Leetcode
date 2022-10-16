/**
 * @param {number[]} prices
 * @return {number}
 */

// I: array of prices of stock
// O: maximum profit
// C: cannot sell before buy
// E: no profit -> 0

// local min, local max, global max
// loop through prices
    // if current is lower than local min, local min and max are current
    // if current is greater than local max, update local max
    // if profit (max - min) is greater than global max, update

var maxProfit = function(prices) {
    var min = prices[0]
    var max = prices[0]
    var globalMax = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            max = prices[i];
        }
        if (prices[i] > max) {
            max = prices[i];
        }
        var profit = max - min;
        globalMax = Math.max(profit, globalMax);
    }
    return globalMax;
};