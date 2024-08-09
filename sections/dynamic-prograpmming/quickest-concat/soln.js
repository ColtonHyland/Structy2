const quickestConcat = (s, words) => {
    const result = _quickestConcat(s, words);
    return result === Infinity ? -1 : result;
};

const _quickestConcat = (s, words, memo = {}) => {
    const key = s;
    if (key in memo) return memo[key];
    if (s === '') return 0;

    let maxCount = Infinity;
    // let count = 0
    for (let word of words) {
        if (s.startsWith(word)) {
            const suffix = s.slice(word.length);
            let count = 1 + _quickestConcat(suffix, words, memo);
            maxCount = Math.min(maxCount, count);
        }
    }
    memo[key] = maxCount;
    return memo[key];
};

module.exports = {
    quickestConcat,
};

// s = length of string
// w = # of words
// Time: ~O(sw)
// Space: O(s)