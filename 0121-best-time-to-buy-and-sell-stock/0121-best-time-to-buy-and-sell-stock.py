class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        globalMax = 0
        left = 0
        right = 1
        while right < len(prices):
            profit = prices[right] - prices[left]
            globalMax = max(globalMax, profit)
            if prices[right] < prices[left]:
                left = right
                right = left + 1
            else:
                right += 1
        return globalMax