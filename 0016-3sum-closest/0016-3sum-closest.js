/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    var sum = 0;
    var diff = Infinity;
    for (var i = 0; i < nums.length - 2; i++) {
        var left = i + 1;
        var right = nums.length - 1;
        while (right > left) {
            var currSum = nums[i] + nums[left] + nums[right];
            var currDiff = Math.abs(target - currSum);
            if (currDiff < diff) {
                diff = currDiff
                sum = currSum;
            }
            if (currSum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return sum;
};