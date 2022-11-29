class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest = 0
        hashset = set(nums)
        for num in hashset:
            if num - 1 not in hashset:
                start = num
                currLength = 1
                while start + 1 in hashset:
                    currLength += 1
                    start += 1
                longest = max(longest, currLength)
        return longest