// counting change
// Write a function, countingChange, that takes in an amount and an array of coins.
// The function should return the number of different ways it is possible to make
// change for the given amount using the coins.

// You may reuse a coin as many times as necessary.

// For example,

// countingChange(4, [1,2,3]) -> 4

// There are four different ways to make an amount of 4:

// 1. 1 + 1 + 1 + 1
// 2. 1 + 1 + 2
// 3. 1 + 3
// 4. 2 + 2
// countingChange(4, [1, 2, 3]); // -> 4
// countingChange(8, [1, 2, 3]); // -> 10
// countingChange(24, [5, 7, 3]); // -> 5
// countingChange(13, [2, 6, 12, 10]); // -> 0
// countingChange(512, [1, 5, 10, 25]); // -> 20119
// countingChange(1000, [1, 5, 10, 25]); // -> 142511
// countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // 