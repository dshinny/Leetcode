/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length === 0) return [];
    if (arr.length === 1) return [-1];
    var localMax = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (var i = arr.length - 2; i >= 0; i--) {
        var temp = arr[i];
        arr[i] = localMax;
        localMax = Math.max(localMax, temp);
    }
    return arr;
};