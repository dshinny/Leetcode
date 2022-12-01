class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        if len(intervals) < 2:
            return True
        intervals.sort(key=lambda x: x[0])
        i = 1
        while i < len(intervals):
            curr = intervals[i]
            prev = intervals[i - 1]
            if curr[0] < prev[1]:
                return False
            i += 1
        return True