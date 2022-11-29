class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        result = 0
        rows = len(grid)
        cols = len(grid[0])
        visited = set()
        def turnIntoWater(r, c):
            queue = deque()
            queue.append((r, c))
            visited.add((r, c))
            directions = [
                [0, 1],
                [1, 0],
                [0, -1],
                [-1, 0]
            ]
            while queue:
                r, c = queue.popleft()
                for dr, dc in directions:
                    row = r + dr
                    col = c + dc
                    if (row in range(rows) and 
                        col in range(cols) and 
                        grid[row][col] == "1" and
                       (row, col) not in visited):
                        queue.append((row, col))
                        visited.add((row, col))
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1" and (i, j) not in visited:
                    turnIntoWater(i, j)
                    result += 1
        return result