/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    var perm = [[]];
    for (var i = 0; i < nums.length; i++) {
        const permLength = perm.length;
        for (var j = 0; j < permLength; j++) {
            var old = perm.shift();
            for (var k = 0; k <= old.length; k++) {
                var newArr = old.slice();
                newArr.splice(k, 0, nums[i]);
                if (newArr.length === nums.length) {
                    result.push(newArr);
                } else {
                    perm.push(newArr);
                }
            }
        }
    }
    return result;
};