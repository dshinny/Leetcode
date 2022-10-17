/**
 * @param {string} s
 * @return {number}
 */

// I: string
// O: length of longest substring
// C: no repeating characters
// E: none

// left = 0, right = 1
// global max, hashmap
// loop through s
    // if the value is seen past left pointer
        // update left to be prev seen index + 1
        // update seen index to current index
    // else add value to seen and increment right

var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    var seen = {};
    var left = 0;
    var right = 0;
    var max = 0;
    while (right < s.length) {
        var char = s[right];
        if (seen[char] >= left) {
            left = seen[char] + 1;
        }
        seen[char] = right;
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};