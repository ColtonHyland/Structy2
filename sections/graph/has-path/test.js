// has path
// Write a function, hasPath, that takes in an object representing the adjacency list
// of a directed acyclic graph and two nodes (src, dst). The function should return a
// boolean indicating whether or not there exists a directed path between the source
// and destination nodes.

// Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPath(graph, 'f', 'k'); // true
// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPath(graph, 'f', 'j'); // false
// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPath(graph, 'i', 'h'); // true
// const graph = {
//   v: ['x', 'w'],
//   w: [],
//   x: [],
//   y: ['z'],
//   z: [],
// };

// hasPath(graph, 'v', 'w'); // true
// const graph = {
//   v: ['x', 'w'],
//   w: [],
//   x: [],
//   y: ['z'],
//   z: [],
// };

// hasPath(graph, 'v', 'z'); // false
