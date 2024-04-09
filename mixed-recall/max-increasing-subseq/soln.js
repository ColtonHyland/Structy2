const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo = {}) => {
    const key = i + ',' + previous;
    if (key in memo) return memo[key];
    if (i === numbers.length) return 0;

    const options = [];
    const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
    options.push(dontTakeCurrent);

    const current = numbers[i];
    if (current > previous) {
        const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
        options.push(takeCurrent);
    }

    memo[key] = Math.max(...options);
    return memo[key];
};

module.exports = {
    maxIncreasingSubseq,
};

// n = length of array
// Time: O(n^2)
// Space: O(n^2)