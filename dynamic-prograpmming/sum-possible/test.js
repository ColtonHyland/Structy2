// sum possible
// Write a function sumPossible that takes in an amount and an array of positive 
// numbers. The function should return a boolean indicating whether or not it is
// possible to create the amount by summing numbers of the array. You may reuse
// numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.

// sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
// sumPossible(15, [6, 2, 10, 19]); // -> false
// sumPossible(13, [6, 2, 1]); // -> true
// sumPossible(103, [6, 20, 1]); // -> true
// sumPossible(12, []); // -> false
// sumPossible(12, [12]); // -> true
// sumPossible(0, []); // -> true
// sumPossible(271, [10, 8, 265, 24]); // -> false
// sumPossible(2017, [4, 2, 10]); // -> false
// sumPossible(13, [3, 5]); // -> true
// sumPossible(10, [4, 5, 7]); // -> true