/**
 * @param {number[]} nums
 * @return {boolean}
 */

// I: array
// O: boolean
// C: none
// E: none

// initialize set
// loop through nums
    // if found in set, return false
    // else add it to set
var containsDuplicate = function(nums) {
    var set = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i])
        }
    }
    return false;
};