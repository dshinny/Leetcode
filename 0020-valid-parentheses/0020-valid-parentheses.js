/**
 * @param {string} s
 * @return {boolean}
 */

// I: string
// O: boolean
// C: none
// E: none

// initialize stack, options
// loop through s
    // if options[s[i]], push corresponding bracket onto stack
    // else check that options[last item in stack] is current (if not, return false) and pop

var isValid = function(s) {
    var stack = [];
    var options = {'{': '}',
                   '(': ')',
                   '[': ']'
                  }
    for (var i = 0; i < s.length; i++) {
        var curr = s[i].toString();
        if (options[curr]) {
            stack.push(curr);
        } else {
            var last = stack.pop();
            if (options[last] !== curr) {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};