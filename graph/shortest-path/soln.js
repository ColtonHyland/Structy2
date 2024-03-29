const shortestPath = (edges, nodeA, nodeB) => {
    const graph = fillGraph(edges);
    const queue = [[nodeA, 0]];
    const visited = new Set([nodeA]);

    while (queue.length > 0) {
        const [node, distance] = queue.shift();
        if (node === nodeB) return distance;
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
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

module.exports = {
    shortestPath,
};

// e = number edges
// Time: O(e)
// Space: O(e)