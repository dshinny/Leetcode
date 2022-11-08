/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var i = 0;
    while (i < nums.length) {
        if (nums[i] !== nums.length) {
            var j = nums[i];
            if (nums[i] !== i) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;             
            } else {
                i++;
            }
        } else {
            i++;
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums.length) return i;
    }
    return nums.length;
};