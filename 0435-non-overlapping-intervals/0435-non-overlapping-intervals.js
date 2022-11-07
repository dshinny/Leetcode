/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    var counter = 0;
    var i = 0;
    var j = 1;
    while (i < intervals.length && j < intervals.length) {
        var first = intervals[i];
        var second = intervals[j];
        if (first[1] > second[0]) {
            if (first[1] < second[1]) {
                j++;
            } else {
                j++;
                i = j - 1;
            }
            counter++;
        } else {
            j++;
            i = j - 1;
        }
    }
    return counter;
};