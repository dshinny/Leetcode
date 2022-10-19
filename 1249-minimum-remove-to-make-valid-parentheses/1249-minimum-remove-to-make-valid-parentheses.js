/**
 * @param {string} s
 * @return {string}
 */

// I: string
// O: valid string
// C: none
// E: empty string

// initialize stack, turn string into array
// loop through string s
    // if its open parenthesis
        // add to stack
    // if its closed parenthesis
        // if stack.length, pop
        // else remove
// while stack.length
    // remove at those indices

var minRemoveToMakeValid = function(s) {
    var stack = [];
    s = s.split('');
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (char === '(') {
            stack.push(i);
        }
        if (char === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                s[i] = '';
            }
        }
    }
    while (stack.length) {
        var index = stack.pop();
        s[index] = ''
    }
    return s.join('');
};