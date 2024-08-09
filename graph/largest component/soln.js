const largestComponent = (graph) => {
    const visited = new Set();
    let largestSize = 0;
    for (let node in graph) {
        let size = traverseGraph(graph, node, visited);
        if (size > largestSize) largestSize = size;
    }
    return largestSize;
};

const traverseGraph = (graph, current, visited) => {
    if (visited.has(String(current))) return 0;
    visited.add(String(current));
    let size = 1;
    for (let neighbor of graph[current]) {
        size += traverseGraph(graph, neighbor, visited, size + 1);
    }
    return size;
};

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

module.exports = {
    largestComponent,
};
