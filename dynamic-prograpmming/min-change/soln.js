const minChange = (amount, coins) => {
    const answer = _minChange(amount, coins);
    if (answer === Infinity) {
        return -1;
    } else {
        return answer;
    }
};

const _minChange = (amount, coins, memo = {}) => {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return Infinity;
    let minCoins = Infinity;
    for (let coin of coins) {
        const numCoins = 1 + minChange(amount - coin, coins, memo);
        if (numCoins < minCoins) minCoins = numCoins;
    }
    memo[amount] = minCoins;
    return minCoins;
};

module.exports = {
    minChange,
};

// a = amount
// c = # coins
// Time: O(a*c)
// Space: O(a)
