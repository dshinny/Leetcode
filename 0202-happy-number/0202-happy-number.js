/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var slow = n;
    var fast = n;
    while (true) {
        slow = getSum(slow);
        fast = getSum(getSum(fast));
        if (slow === fast) {
            break;
        }
    }
    return fast === 1;
};

var getSum = function(num) {
    var sum = 0;
    while (num > 0) {
        var digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num /10)
    }
    return sum;
}