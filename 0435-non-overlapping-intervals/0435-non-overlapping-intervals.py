class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[0])
        counter = 0
        i = 1
        end = intervals[0][1]
        while i < len(intervals):
            if intervals[i][0] < end:
                end = min(end, intervals[i][1])
                counter += 1
            else:
                end = intervals[i][1]
            i += 1
        return counter