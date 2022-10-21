/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length < 0) return [-1, -1];
    var mid = binarySearch(nums, 0, nums.length - 1, target);
    if (mid === -1) return [-1, -1];
    var start = mid;
    var end = mid;
    var temp1;
    var temp2;
    while (start !== -1) {
        temp1 = start;
        start = binarySearch(nums, 0, start - 1, target);
    }
    start = temp1;
    while (end !== -1) {
        temp2 = end;
        end = binarySearch(nums, end + 1, nums.length - 1, target);
    }
    end = temp2;
    return [start, end]
};

var binarySearch = function(nums, left, right, target) {
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}