// has cycle
// Write a function, hasCycle, that takes in an object representing the adjacency list of a
// directed graph. The function should return a boolean indicating whether or not the graph
// contains a cycle.

// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["a"],
// }); // -> true
// hasCycle({
//   a: ["b", "c"],
//   b: ["c"],
//   c: ["d"],
//   d: [],
// }); // -> false
// hasCycle({
//   a: ["b", "c"],
//   b: [],
//   c: [],
//   e: ["f"],
//   f: ["e"],
// }); // -> true
// hasCycle({
//   q: ["r", "s"],
//   r: ["t", "u"],
//   s: [],
//   t: [],
//   u: [],
//   v: ["w"],
//   w: [],
//   x: ["w"],
// }); // -> false
// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["a"],
//   g: [],
// }); // -> true
// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["d"],
//   d: ["b"],
// }); // -> true
// hasCycle({
//   a: ["b", "c"],
//   b: ["c"],
//   c: ["d"],
//   d: [],
//   e: ["c"],
// }); // -> false