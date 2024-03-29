// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls.
// W represents water and L represents land. The function should return the number
// of islands on the grid. An island is a vertically or horizontally connected
// region of land.

// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// islandCount(grid); // -> 3
// const grid = [
//   ['L', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['W', 'L', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'W', 'W'],
//   ['W', 'W', 'L', 'L', 'L'],
// ];

// islandCount(grid); // -> 4
// const grid = [
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
// ];

// islandCount(grid); // -> 1
//  const grid = [
//   ['W', 'W'],
//   ['W', 'W'],
//   ['W', 'W'],
// ];

// islandCount(grid); // -> 0