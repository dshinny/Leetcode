/**
 * @param {number[]} height
 * @return {number}
 */

// I: heights array
// O: area of water trapped
// C: non-negative integers
// E: none
// T: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
// [] -> 0
// [1] -> 0
// [1, 2, 1] -> 0

// Notes: 
// - area of current index = min(maxLeft, maxRight) - current height

// Strategy: 
// initialize left and right pointers, area variable, maxLeft, maxRight
// while loop
    // if height of left < height of right
        // if maxLeft > height of left
            // update total
        // else update maxLeft
        // increment left
    // else do the same thing with right

var trap = function(height) {
    var area = 0;
    var maxLeft = 0;
    var maxRight = 0;
    var left = 0;
    var right = height.length - 1;
    while (right > left) {
        if (height[left] < height[right]) {
            if (maxLeft > height[left]) {
                area = area + maxLeft - height[left];
            } else {
                maxLeft = Math.max(maxLeft, height[left])
            }
            left++;
        } else {
            if (maxRight > height[right]) {
                area = area + maxRight - height[right];
            } else {
                maxRight = Math.max(maxRight, height[right])
            }
            right--;
        }
    }
    return area;
};