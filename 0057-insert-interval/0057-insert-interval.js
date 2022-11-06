/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    var start = newInterval[0];
    var end = newInterval[1];
    var merged = []
    var i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        i++;
    }
    merged.push([start, end])
    while (i < intervals.length) {
        merged.push(intervals[i])
        i++;
    }
    return merged;
};