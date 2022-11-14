/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [[]];
    for (var i = 0; i < nums.length; i++) {
        var length = result.length;
        for (var j = 0; j < length; j++) {
            var arr = result[j].slice();
            arr.push(nums[i]);
            result.push(arr);
        }
    }
    return result;
};