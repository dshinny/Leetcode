/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var goalIndex = nums.length - 1;
    for (var i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goalIndex) {
            goalIndex = i;
        }
    }
    return goalIndex === 0;
};