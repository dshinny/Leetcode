/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// I: two strings
// O: boolean
// C: none
// E: different lengths

// initialize hashmap
// check lengths
// loop through first string
    // store each letter with frequency count
// loop through second string
    // if letter is in hashmap, 
        // decrement
    // else return false

var isAnagram = function(s, t) {
    var seen = {};
    if (s.length !== t.length) return false;
    for (var i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            seen[s[i]]++;
        } else {
            seen[s[i]] = 1;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (seen[t[i]]) {
            seen[t[i]]--;
        } else {
            return false;
        }
    }
    return true;
};