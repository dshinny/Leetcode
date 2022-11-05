/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;
    var key = {};
    var start = 0;
    var max = 1;
    for (var end = 0; end < s.length; end++) {
        const rightChar = s[end];
        if (!(rightChar in key)) {
            key[rightChar] = 0;
        }
        key[rightChar]++;
        while (Object.values(key).length > k) {
            const leftChar = s[start];
            key[leftChar]--;
            if (key[leftChar] === 0) {
                delete key[leftChar];
            }
            start++;
        }
        max = Math.max(max, end - start + 1)
    }
    return max;
};