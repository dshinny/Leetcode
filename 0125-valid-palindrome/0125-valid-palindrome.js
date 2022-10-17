/**
 * @param {string} s
 * @return {boolean}
 */

// I: string
// O: boolean
// C: not case-sensitive, no non-alphanumeric characters
// E: even number of characters, empty string

// left and right pointers
// if odd
    // while left and right aren't equal to each other
        // check if theyre the same
        // move pointers to center
// if even
    // while right > left
        // check if theyre the same
        // move pointers to center

var isPalindrome = function(s) {
    if (s.length === 0) return true;
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var left = 0;
    var right = s.length - 1;
    if (s.length % 2 === 1) {
        while (right !== left) {
            if (s[right] !== s[left]) return false;
            left++;
            right--;
        }
    } else {
        while (right > left) {
            if (s[right] !== s[left]) return false;
            left++;
            right--;
        }
    }
    return true;
};