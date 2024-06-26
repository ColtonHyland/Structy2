// topological order
// Write a function, topologicalOrder, that takes in an object representing the
// adjacency list for a directed-acyclic graph. The function should return an
// array containing the topological-order of the graph.

// The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.

// topologicalOrder({
//   a: ["f"],
//   b: ["d"],
//   c: ["a", "f"],
//   d: ["e"],
//   e: [],
//   f: ["b", "e"],
// }); // -> ['c', 'a', 'f', 'b', 'd', 'e']
// topologicalOrder({
//   h: ["l", "m"],
//   i: ["k"],
//   j: ["k", "i"],
//   k: ["h", "m"],
//   l: ["m"],
//   m: [],
// }); // -> ['j', 'i', 'k', 'h', 'l', 'm']
// topologicalOrder({
//   q: [],
//   r: ["q"],
//   s: ["r"],
//   t: ["s"],
// }); // -> ['t', 's', 'r', 'q']
// topologicalOrder({
//   v: ["z", "w"],
//   w: [],
//   x: ["w", "v", "z"],
//   y: ["x"],
//   z: ["w"],
// }); // -> ['y', 'x', 'v', 'z', 'w']