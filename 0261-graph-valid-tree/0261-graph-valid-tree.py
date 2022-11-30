class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        visited = set()
        count = 0
        adjList = {i:[] for i in range(n)}
        for n1, n2 in edges:
            adjList[n1].append(n2)
            adjList[n2].append(n1)
        def dfs(node, prev):
            if node in visited:
                return False
            visited.add(node)
            for neighbor in adjList[node]:
                if neighbor == prev:
                    continue
                if not dfs(neighbor, node):
                    return False
            return True
        return dfs(0, -1) and n == len(visited)