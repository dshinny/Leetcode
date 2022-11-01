/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var keys = {};
    for (var i = 0; i < strs.length; i++) {
        var word = strs[i];
        var sorted = order(word);
        if (keys[sorted]) {
            keys[sorted].push(word);
        } else {
            keys[sorted] = [word];
        }
    }
    return Object.values(keys);
};

var order = function(str) {
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}