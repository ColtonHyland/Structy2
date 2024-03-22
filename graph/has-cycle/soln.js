const hasCycle = (graph) => {
    const visited = new Set();
    const visiting = new Set();
    for (let node in graph) {
        if (cycleDetect(graph, node, visiting, visited) === true) return true;
    }
    return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
    if (visited.has(node)) return false;
    if (visiting.has(node)) return true;
    visiting.add(node);

    for (let neighbor of graph[node]) {
        if (cycleDetect(graph, neighbor, visiting, visited) === true) return true;
    }

    visiting.delete(node);
    visited.add(node);

    return false;
};

module.exports = {
    hasCycle,
};

// n = number of nodes
// Time: O(n^2)
// Space: O(n)