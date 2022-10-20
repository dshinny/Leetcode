/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var index = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, index)
};

function quickSelect(arr, left, right, index) {
    const pivotIndex = partition(arr, left, right);
    if (index === pivotIndex) {
        return arr[pivotIndex];
    } else if (index < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, index);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, index);
    }
}

function partition(arr, left, right) {
    var pivotElement = arr[right]
    var pivotIndex = left;
    for (var j = pivotIndex; j < right; j++) {
        if (arr[j] <= pivotElement) {
            swap(arr, pivotIndex, j);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, right)
    return pivotIndex;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}