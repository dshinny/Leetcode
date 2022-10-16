/**
 * @param {number[]} nums
 * @return {number[]}
 */

// I: array nums
// O: result array
// C: O(n) time, no division
// E: none

// initialize result, pre = 1, post = 1
// loop through nums forward
    // fill result array with pre
    // multiply pre with current value
// loop through nums backward
    // multiply post with result[i] to update result[i]
    // multiply post with current to update post

var productExceptSelf = function(nums) {
    var result = [];
    var pre = 1;
    var post = 1;
    for (var i = 0; i < nums.length; i++) {
        result[i] = pre;
        pre *= nums[i];
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        result[i] *= post;
        post *= nums[i]
    }
    return result;
};