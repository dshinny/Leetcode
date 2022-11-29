class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        list = []
        pre = 1
        for i in range(0, len(nums)):
            list.append(pre)
            pre *= nums[i]
        post = 1
        for i in range(len(nums) - 1, -1, -1):
            list[i] *= post
            post *= nums[i]
        return list