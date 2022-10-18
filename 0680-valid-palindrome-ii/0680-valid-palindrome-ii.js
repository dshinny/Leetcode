/**
 * @param {string} s
 * @return {boolean}
 */

// I: string
// O: boolean (if palindrome with one edit)
// C: none
// E: none

// initialize counter = 0, left and right pointers
// loop through string with strings
    // if match, increment and decrement
    // if not match and counter = 0
        // compare next char from left and right and determine which to delete
        // counter++


var validPalindrome = function(s) {
    var left = 0;
    var right = s.length - 1;
    while (right >= left) {
        if (s[right] === s[left]) {
            right--;
            left++;
        } else {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
    }
    return true;
};

var isPalindrome = function(str, start, end) {
    while (end > start) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}