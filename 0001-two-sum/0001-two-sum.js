/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// edge cases: cannot use same element twice
var twoSum = function(nums, target) {
    // initialize hashmap
    // loop through nums
        // if diff between target and value has been seen and have different indices, return                 indices of both
        // store index with value
    
    var seen = {};
    for (var i = 0; i < nums.length; i++) {
        var currValue = nums[i]
        var diff = target - currValue;
        if (seen[diff] !== undefined && seen[diff] !== i) {
            return [seen[diff], i]
        }
        seen[currValue] = i;
    }
};