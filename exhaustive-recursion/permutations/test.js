// permutations
// Write a function, permutations, that takes in an array an argument. The function
// should return a 2D array where each subarray represents one of the possible
// permutations of the array.

// The subarrays may be returned in any order.

// You may assume that the input array contains unique elements.

// permutations(['a', 'b', 'c']); // -> 
// // [ 
// //   [ 'a', 'b', 'c' ], 
// //   [ 'b', 'a', 'c' ], 
// //   [ 'b', 'c', 'a' ], 
// //   [ 'a', 'c', 'b' ], 
// //   [ 'c', 'a', 'b' ], 
// //   [ 'c', 'b', 'a' ] 
// // ] 
// permutations(['red', 'blue']); // ->
// // [ 
// //   [ 'red', 'blue' ], 
// //   [ 'blue', 'red' ] 
// // ]
// permutations([8, 2, 1, 4]); // ->
// // [ 
// //   [ 8, 2, 1, 4 ], [ 2, 8, 1, 4 ], 
// //   [ 2, 1, 8, 4 ], [ 2, 1, 4, 8 ], 
// //   [ 8, 1, 2, 4 ], [ 1, 8, 2, 4 ], 
// //   [ 1, 2, 8, 4 ], [ 1, 2, 4, 8 ], 
// //   [ 8, 1, 4, 2 ], [ 1, 8, 4, 2 ], 
// //   [ 1, 4, 8, 2 ], [ 1, 4, 2, 8 ], 
// //   [ 8, 2, 4, 1 ], [ 2, 8, 4, 1 ], 
// //   [ 2, 4, 8, 1 ], [ 2, 4, 1, 8 ], 
// //   [ 8, 4, 2, 1 ], [ 4, 8, 2, 1 ], 
// //   [ 4, 2, 8, 1 ], [ 4, 2, 1, 8 ], 
// //   [ 8, 4, 1, 2 ], [ 4, 8, 1, 2 ], 
// //   [ 4, 1, 8, 2 ], [ 4, 1, 2, 8 ] 
// // ] 
// permutations([]); // ->
// // [
// //  [ ]
// // ]