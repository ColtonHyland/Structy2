// undirected path
// Write a function, undirectedPath, that takes in an array of edges for an
// undirected graph and two nodes (nodeA, nodeB). The function should return a
// boolean indicating whether or not there exists a path between nodeA and nodeB.

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

// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'j', 'm'); // -> true
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'm', 'j'); // -> true
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'l', 'j'); // -> true
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'k', 'o'); // -> false
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'i', 'o'); // -> false
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'a', 'b'); // -> true
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'a', 'c'); // -> true
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'r', 't'); // -> true
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'r', 'b'); // -> false
// const edges = [
//   ['s', 'r'],
//   ['t', 'q'],
//   ['q', 'r'],
// ];

// undirectedPath(edges, 'r', 't'); // -> true
