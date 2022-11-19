/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var dp = new Array(s.length).fill(undefined);
    return helper(s, wordDict, 0, dp);
};

var helper = function(s, wordDict, index, dp) {
    if (index === s.length) {
        return true;
    }
    if (dp[index] !== undefined) {
        return dp[index]
    }
    var curr = '';
    for (var i = index; i < s.length; i++) {
        curr += s[i];
        if (wordDict.indexOf(curr) !== -1 && helper(s, wordDict, i + 1, dp)) {
            dp[index] = true;
            return true;
        }
    }
    dp[index] = false;
    return false;
}