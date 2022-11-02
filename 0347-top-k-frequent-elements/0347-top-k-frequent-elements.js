/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var found = {};
    for (var i = 0; i < nums.length; i++) {
        if (found[nums[i]]) {
            found[nums[i]]++;
        } else {
            found[nums[i]] = 1;
        }
    }
    var sorted = Object.entries(found).sort((a, b) => b[1] - a[1]);
    var result = [];
    for (var i = 0; i < k; i++) {
        result.push(sorted[i][0])
    }
    return result;
};