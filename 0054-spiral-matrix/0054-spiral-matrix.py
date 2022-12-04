class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        result = []
        rows, cols = len(matrix), len(matrix[0])
        up = left = 0
        right = cols - 1
        down = rows - 1
        while (len(result) < rows * cols):
            # traverse right
            for col in range(left, right + 1):
                result.append(matrix[up][col])
            # traverse down
            for row in range(up + 1, down + 1):
                result.append(matrix[row][right])
            # traverse left
            if up != down:
                for col in range(right - 1, left - 1, -1):
                    result.append(matrix[down][col])
            # traverse up
            if left != right:
                for row in range(down - 1, up, -1):
                    result.append(matrix[row][left])
            right -= 1
            up += 1
            left += 1
            down -= 1
        return result