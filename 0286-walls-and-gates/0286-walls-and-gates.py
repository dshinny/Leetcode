class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        q = collections.deque()
        rows, cols = len(rooms), len(rooms[0])
        for i in range(rows):
            for j in range(cols):
                if rooms[i][j] == 0:
                    q.append([i, j])
        level = 1
        length = len(q)
        directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        while q:
            if length == 0:
                level += 1
                length = len(q)
            curr = q.popleft()
            length -= 1
            row, col = curr[0], curr[1]
            for r, c in directions:
                nextRow = row + r
                nextCol = col + c
                if (nextRow in range(rows) and nextCol in range(cols) and
                    rooms[nextRow][nextCol] == 2147483647):
                    rooms[nextRow][nextCol] = level
                    q.append([nextRow, nextCol])
                