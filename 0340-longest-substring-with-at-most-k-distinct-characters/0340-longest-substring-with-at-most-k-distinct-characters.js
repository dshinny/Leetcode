/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;
    var key = {};
    var left = 0;
    var right = 0;
    key[s[left]] = 1;
    var max = 1;
    while (right < s.length) {
        if (Object.values(key).length > k) {
            key[s[left]]--;
            if (key[s[left]] === 0) {
                delete key[s[left]];
            }
            left++;
        } else {
            max = Math.max(max, right - left + 1)
            right++;
            if (key[s[right]]) {
                key[s[right]]++;
            } else {
                key[s[right]] = 1;
            }
        }
    }
    return max;
};