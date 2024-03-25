// count paths
// Write a function, countPaths, that takes in a grid as an argument. 
// In the grid, 'X' represents walls and 'O' represents open spaces. 
// You may only move down or to the right and cannot pass through walls. 
// The function should return the number of ways possible to travel from the 
// top-left corner of the grid to the bottom-right corner.

// const grid = [
//   ["O", "O"],
//   ["O", "O"],
// ];
// countPaths(grid); // -> 2
// const grid = [
//   ["O", "O", "X"],
//   ["O", "O", "O"],
//   ["O", "O", "O"],
// ];
// countPaths(grid); // -> 5
// const grid = [
//   ["O", "O", "O"],
//   ["O", "O", "X"],
//   ["O", "O", "O"],
// ];
// countPaths(grid); // -> 3
// const grid = [
//   ["O", "O", "O"],
//   ["O", "X", "X"],
//   ["O", "O", "O"],
// ];
// countPaths(grid); // -> 1
// const grid = [
//   ["O", "O", "X", "O", "O", "O"],
//   ["O", "O", "X", "O", "O", "O"],
//   ["X", "O", "X", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 0
// const grid = [
//   ["O", "O", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "X"],
//   ["X", "O", "O", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 42
// const grid = [
//   ["O", "O", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "X"],
//   ["X", "O", "O", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "X"],
// ];
// countPaths(grid); // -> 0
// const grid = [
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 40116600
// const grid = [
//   ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 3190434