// create combinations
// Write a function, createCombinations, that takes in an array and a length as
// arguments. The function should return a 2D array representing all of the
// combinations of the specifized length.

// The items within the combinations and the combinations themselves may be
// returned in any order.

// You may assume that the input array contains unique elements
// and 1 <= k <= items.length.

// createCombinations(["a", "b", "c"], 2); // ->
// // [
// //   [ 'a', 'b' ],
// //   [ 'a', 'c' ],
// //   [ 'b', 'c' ]
// // ]
// createCombinations(["q", "r", "s", "t"], 2); // ->
// // [
// //   [ 'q', 'r' ],
// //   [ 'q', 's' ],
// //   [ 'q', 't' ],
// //   [ 'r', 's' ],
// //   [ 'r', 't' ],
// //   [ 's', 't' ]
// // ]
// createCombinations(['q', 'r', 's', 't'], 3)); // ->
// // [
// //   [ 'q', 'r', 's' ],
// //   [ 'q', 'r', 't' ],
// //   [ 'q', 's', 't' ],
// //   [ 'r', 's', 't' ]
// // ]
// createCombinations([1, 28, 94], 3); // ->
// // [
// //   [ 1, 28, 94 ]
// // ]