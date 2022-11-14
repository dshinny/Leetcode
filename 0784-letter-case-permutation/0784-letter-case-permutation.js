/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    var result = [''];
    for (var i = 0; i < s.length; i++) {
        const length = result.length;
        if (!isNaN(parseInt(s[i], 10))) {
            for (var j = 0; j < length; j++) {
                result[j] += s[i];
            }
        } else {
            for (var j = 0; j < length; j++) {
                var copy = result[j];
                copy += s[i].toUpperCase();
                result.push(copy);
                result[j] += s[i].toLowerCase();
            }
        }
    }
    return result;
};