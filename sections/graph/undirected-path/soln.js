const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = fillGraph(edges);
    return findPath(graph, nodeA, nodeB, new Set());
};

const fillGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

const findPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    for (let neighbor of graph[src]) {
        if (findPath(graph, neighbor, dst, visited) === true) {
            return true;
        }
    }
    return false;
};

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(e)

module.exports = {
    undirectedPath,
};
