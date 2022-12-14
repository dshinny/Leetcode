/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp = Array((amount + 1)).fill((amount + 1));
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (coins[j] > i) continue;
            var diff = i - coins[j];
            if (dp[diff] !== amount + 1) {
                dp[i] = Math.min(1 + dp[diff], dp[i]);
            }
        }
    }
    if (dp[amount] === amount + 1) return -1;
    return dp[amount]
};