/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var pointer = 0;
    while (pointer <= right) {
        if (nums[pointer] === 0) {
            swap(nums, pointer, left);
            left++;
            pointer++
        } else if (nums[pointer] === 2) {
            swap(nums, pointer, right);
            right--;
        } else {
            pointer++;
        }
    }
    return nums;
};

function swap(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}