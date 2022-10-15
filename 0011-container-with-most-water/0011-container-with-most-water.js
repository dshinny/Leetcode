/**
 * @param {number[]} height
 * @return {number}
 */

// I: height (integer array)
// O: maximum amount of water a container can store
// C: O(n)
// E: none

// set up left and right pointers, and maxArea variable
// loop with two pointers
    // compare area with max and update
    // bring the pointer with lower height closer

var maxArea = function(height) {
    var max = 0;
    var left = 0;
    var right = height.length - 1;
    while (right > left) {
        var min = Math.min(height[right], height[left]);
        var length = right - left;
        var area = min * length;
        max = Math.max(area, max);
        if (min === height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return max;
};