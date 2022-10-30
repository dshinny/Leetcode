/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[1], nums[0]);
    var cost = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < nums.length; i++) {
        cost[i] = Math.max(nums[i] + cost[i - 2], cost[i - 1]);
    }
    return cost[nums.length - 1];
};