class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        row = set()
        col = set()
        rows = len(matrix)
        cols = len(matrix[0])
        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == 0:
                    row.add(i)
                    col.add(j)
        for i in range(rows):
            for j in range(cols):
                if i in row or j in col:
                    matrix[i][j] = 0