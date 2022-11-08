/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = '';
    var first = strs[0];
    for (var i = 0; i < first.length; i++) {
        for (var j = 0; j < strs.length; j++) {
            if (strs[j][i] !== first[i]) {
                return prefix;
            }
        }
        prefix += first[i];
    }
    return prefix;
};