/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var i = 0;
    var result = [];
    while (i < nums.length) {
        var j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        } else {
            i++;
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) result.push(i + 1)
    } 
    return result;
};