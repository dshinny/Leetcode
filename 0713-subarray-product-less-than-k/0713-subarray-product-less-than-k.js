/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    var count = 0;
    var left = 0;
    var product = 1;
    for (var right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k && right >= left) {
            product /= nums[left];
            left++;
        }
        count += right - left + 1;
    }
    return count;
};