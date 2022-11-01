/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var pointerS = 0;
    var pointerT = 0;
    while (pointerT < t.length) {
        if (s[pointerS] === t[pointerT]) {
            pointerS++;
            pointerT++;
        } else {
            pointerT++;
        }
    }
    if (pointerS >= s.length) return true;
    return false;
};