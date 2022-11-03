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
            if (dp[diff] !== amount + 1 && diff >= 0) {
                dp[i] = Math.min(1 + dp[diff], dp[i]);
            }
        }
    }
    if (dp[amount] === amount + 1) return -1;
    return dp[amount]
//     var tabu = Array((amount + 1)).fill((amount + 1));
//     tabu[0] = 0;
//         for (let _amount = 1; _amount <= amount; _amount++) {/* Time O(N) */
//         for (let coin = 0; coin < coins.length; coin++) {    /* Time O(N) */
//             const canUpdate = (coins[coin] <= _amount);
//             if (!canUpdate) continue;

//             const difference = (_amount - coins[coin]);
//             const min = (tabu[difference] + 1);

//             tabu[_amount] = Math.min(tabu[_amount], min);    /* Space O(N) */
//         }
//     }

//     return (tabu[amount] <= amount)
//         ? tabu[amount]
//         : -1;
};