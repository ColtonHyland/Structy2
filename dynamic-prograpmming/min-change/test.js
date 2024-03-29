// min change
// Write a function minChange that takes in an amount and an array of coins.
// The function should return the minimum number of coins required to create the
// amount. You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

// minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
// minChange(13, [1, 9, 5, 14, 30]); // -> 5
// minChange(23, [2, 5, 7]); // -> 4
// minChange(102, [1, 5, 10, 25]); // -> 6
// minChange(200, [1, 5, 10, 25]); // -> 8
// minChange(2017, [4, 2, 10]); // -> -1
// minChange(271, [10, 8, 265, 24]); // -> -1
// minChange(0, [4, 2, 10]); // -> 0
// minChange(0, []); // -> 0