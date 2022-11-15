/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
    result[0] = binarySearch(nums, target, true);
    if (result[0] !== -1) {
        result[1] = binarySearch(nums, target, false);
    }
    return result;
};

var binarySearch = function(nums, target, findStart) {
    var index = -1;
    var start = 0;
    var end = nums.length - 1;
    var mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            index = mid;
            if (findStart) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return index;
}