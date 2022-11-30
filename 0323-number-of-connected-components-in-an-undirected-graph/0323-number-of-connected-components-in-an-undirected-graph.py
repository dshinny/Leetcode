class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        adjList = {i:[] for i in range(n)}
        connected = 0
        visited = set()
        for n1, n2 in edges:
            adjList[n1].append(n2)
            adjList[n2].append(n1)
        def dfs(node):
            if node in visited:
                return
            visited.add(node)
            for neighbor in adjList[node]:
                dfs(neighbor)
        for vertex in adjList:
            if vertex not in visited:
                dfs(vertex)
                connected += 1
        return connected