/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    var max = 0;
    var left = 0;
    var right = 0;
    var seen = {};
    seen[fruits[left]] = 1;
    while (right < fruits.length) {
        if (Object.values(seen).length > 2) {
            const leftVal = fruits[left];
            seen[leftVal]--;
            if (seen[leftVal] === 0) {
                delete seen[leftVal];
            }
            left++;
        } else {
            max = Math.max(max, right - left + 1)
            right++;
            var rightVal = fruits[right];
            if (seen[rightVal]) {
                seen[rightVal]++;
            } else {
                seen[rightVal] = 1;
            }
        }
    }
    return max;
};