class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set(nums)
        if len(hashset) == len(nums):
            return False
        else:
            return True