const safeCracking = (hints) => {
    const graph = buildGraph(hints);
    return topologicalOrder(graph);
};

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
    }

    return graph;
};

const topologicalOrder = (graph) => {
    const numParents = {};
    for (let node in graph) {
        numParents[node] = 0;
    }

    for (let node in graph) {
        for (let child of graph[node]) {
            numParents[child] += 1;
        }
    }

    const ready = [];
    for (let node in numParents) {
        if (numParents[node] === 0) ready.push(node);
    }

    let order = '';
    while (ready.length > 0) {
        const node = ready.pop();
        order += node;
        for (let child of graph[node]) {
            numParents[child] -= 1;
            if (numParents[child] === 0) ready.push(child);
        }
    }

    return order;
};

module.exports = {
    safeCracking,
};

// e = number of hints
// Time: O(e)
// Space: O(e)
