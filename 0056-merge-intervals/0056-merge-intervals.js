/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    var merged = [];
    var start = intervals[0][0];
    var end = intervals[0][1];
    for (var i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        // overlap - adjust end
        if (interval[0] <= end) {
            end = Math.max(end, interval[1]);
        } else { // no overlap - add first interval
            merged.push([start, end]);
            start = interval[0];
            end = interval[1]
        }
    }
    merged.push([start, end])
    return merged;
};