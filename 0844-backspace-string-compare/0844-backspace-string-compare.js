/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// I: two strings
// O: boolean (if they are equal with backspaces)
// C: none
// E: none

// Notes:
// - iterate backwards

// initialize two pointers at the end of string lengths
// loop through both strings starting from pointers
    // if first string has #
        // keep going until deleted
    // if second string has #
        // keep going until deleted
    // check if the current values match
    // decrement

var backspaceCompare = function(s, t) {
    var p1 = s.length - 1;
    var p2 = t.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] === '#') {
            var backCount = 2;
            while (backCount > 0) {
                p1--;
                backCount--;
                if (s[p1] === '#') {
                    backCount += 2;
                }
            }
        }
        if (t[p2] === '#') {
            var backCount = 2;
            while (backCount > 0) {
                p2--;
                backCount--;
                if (t[p2] === '#') {
                    backCount += 2;
                }
            }
        }
        if (s[p1] !== t[p2]) {
            return false;
        } else {
            p1--;
            p2--;
        }
    }
    return true;
};