/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var curr = nums[i]
        if (i > 0 && curr === nums[i - 1]) continue;
        var left = i + 1;
        var right = nums.length - 1;
        while (right > left) {
            var sum = nums[left] + nums[right] + curr;
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([curr, nums[left], nums[right]]);
                left++;
                while(nums[left] === nums[left - 1] && left < right) {
                   left++; 
                }
            }
        }
    }
    return result;
};