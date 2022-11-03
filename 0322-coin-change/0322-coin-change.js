/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (var i = 1; i < amount + 1; i++) {
        for (var j = 0; j < coins.length; j++) {
            var diff = i - coins[j];
            if (dp[diff] !== amount + 1 && diff >= 0) {
                dp[i] = Math.min(1 + dp[diff], dp[i]);
            }
        }
    }
    if (dp[amount] === amount + 1) return -1;
    return dp[amount]
};