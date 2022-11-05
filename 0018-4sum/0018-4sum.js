/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    var result = [];
    for (var i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (var j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            var left = j + 1;
            var right = nums.length - 1;
            while (right > left) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (target === sum) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    left++;
                    while (nums[left] === nums[left - 1] && left < right) {
                        left++;
                    }
                } else if (target > sum) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};