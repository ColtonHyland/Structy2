// ITERATIVE

const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }
    return false;
};

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

// RECURSIVE

// const hasPath = (graph, src, dst) => {
//     const queue = [src];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (current === dst) return true;
//         for (let neighbor of graph[current]) {
//             queue.push(neighbor);
//         }
//     }
//     return false;
// };

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n^2)

module.exports = {
    hasPath,
};
