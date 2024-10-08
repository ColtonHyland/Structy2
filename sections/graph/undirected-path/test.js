// undirected path
// Write a function, undirectedPath, that takes in an array of edges for an
// undirected graph and two nodes (nodeA, nodeB). The function should return a
// boolean indicating whether or not there exists a path between nodeA and nodeB.

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
