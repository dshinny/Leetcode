/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    var left = 0;
    var right = nums.length - 1;
    var mid;
    var result = nums[0];
    while (right >= left) {
        if (nums[left] < nums[right]) return Math.min(result, nums[left])
        mid = Math.floor((left + right) / 2);
        result = Math.min(nums[mid], result);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};