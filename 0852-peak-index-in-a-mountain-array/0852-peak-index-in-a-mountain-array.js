/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    var globalMax = -Infinity;
    var maxIndex = 0;
    var start = 0;
    var end = arr.length - 1;
    var mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] > globalMax) {
            globalMax = arr[mid];
            maxIndex = mid;
        }
        if ((arr[mid] > arr[mid - 1]) || (arr[mid + 1] > arr[mid])) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return maxIndex;
};