/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    var counter = 0;
    var i = 1;
    var end = intervals[0][1];
    while (i < intervals.length) {
        var interval = intervals[i];
        if (interval[0] < end) {
            end = Math.min(end, interval[1]);
            counter++;
        } else {
            end = interval[1];
        }
        i++;
    }
    return counter;
};