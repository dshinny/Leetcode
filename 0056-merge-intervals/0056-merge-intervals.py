class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) < 2:
            return intervals
        intervals.sort(key=lambda x: x[0])
        merged = []
        i = 0
        j = 1
        while (j < len(intervals)):
            if intervals[i][1] >= intervals[j][0]:
                intervals[j][0] = min(intervals[j][0], intervals[i][0])
                intervals[j][1] = max(intervals[j][1], intervals[i][1])
            else:
                merged.append(intervals[i])
            i += 1
            j += 1
        merged.append(intervals[i])
        return merged