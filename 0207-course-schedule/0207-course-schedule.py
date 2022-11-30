class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        indegree = {i:0 for i in range(numCourses)}
        adjList = {i: [] for i in range(numCourses)}
        count = 0
        for n1, n2 in prerequisites:
            adjList[n2].append(n1)
            indegree[n1] += 1
        stack = []
        for i in range(len(indegree)):
            if indegree[i] == 0:
                stack.append(i)
        while stack:
            curr = stack.pop()
            count += 1
            adj = adjList[curr]
            for i in range(len(adj)):
                n = adj[i]
                indegree[n] -= 1
                if indegree[n] == 0:
                    stack.append(n)
        return count == numCourses