/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    var sum;
    while (right > left) {
        sum = numbers[right] + numbers[left]
        if (target === sum) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};