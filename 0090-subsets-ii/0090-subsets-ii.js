/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    var start = 0;
    var end = 0;
    var result = [[]];
    for (var i = 0; i < nums.length; i++) {
        start = 0;
        if (i > 0 && nums[i] === nums[i - 1]) {
            start = end + 1;
        }
        end = result.length - 1;
        for (var j = start; j <= end; j++) {
            var arr = result[j].slice();
            arr.push(nums[i])
            result.push(arr);
        }
    }
    return result;
};