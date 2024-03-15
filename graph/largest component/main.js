// largest component
// Write a function, largestComponent, that takes in the adjacency list of an
// undirected graph. The function should return the size of the largest connected
// component in the graph.

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

// largestComponent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2']
// }); // -> 4
// largestComponent({
//   1: ['2'],
//   2: ['1','8'],
//   6: ['7'],
//   9: ['8'],
//   7: ['6', '8'],
//   8: ['9', '7', '2']
// }); // -> 6
// largestComponent({
//   3: [],
//   4: ['6'],
//   6: ['4', '5', '7', '8'],
//   8: ['6'],
//   7: ['6'],
//   5: ['6'],
//   1: ['2'],
//   2: ['1']
// }); // -> 5
// largestComponent({}); // -> 0
// largestComponent({
//   0: ['4','7'],
//   1: [],
//   2: [],
//   3: ['6'],
//   4: ['0'],
//   6: ['3'],
//   7: ['0'],
//   8: []
// }); // -> 3