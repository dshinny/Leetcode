class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        localMin = float('inf')
        localMax = float('-inf')
        globalMax = 0;
        for i in range(len(prices)):
            if prices[i] < localMin:
                localMin = prices[i]
                localMax = prices[i]
            else:
                localMax = max(localMax, prices[i])
            globalMax = max(globalMax, localMax - localMin)
        return globalMax