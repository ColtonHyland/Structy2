const sumPossible = (amount, numbers, memo = {}) => {
    if (amount in memo) return memo[amount];
    if (amount === 0) return true;
    if (amount < 0) return false;
    for (let number of numbers) {
        if (sumPossible(amount - number, numbers, memo) === true) {
            memo[amount] = true;
            return true;
        }
    }

    memo[amount] = false;
    return false;
};

module.exports = {
    sumPossible,
};

// a = amount
// n = length of numbers
// Time: O(a*n)
// Space: O(a)