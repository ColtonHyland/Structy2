// connected components count
// Write a function, connectedComponentsCount, that takes in the adjacency list of an
// undirected graph. The function should return the number of connected components
// within the graph.

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (traverseGraph(graph, node, visited) === true) {
            count++;
        }
    }
    return count;
};

const traverseGraph = (graph, src, visited) => {
    if (visited.has(String(src))) return false;
    visited.add(String(src));
    for (let neighbor of graph[src]) {
        traverseGraph(graph, neighbor, visited);
    }
    return true;
};

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

module.exports = {
    connectedComponentsCount,
};