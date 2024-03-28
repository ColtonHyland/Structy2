const canConcat = (s, words, memo = {}) => {
    if (s in memo) return memo[s];
    if (s === '') return true;

    for (let word of words) {
        if (s.startsWith(word)) {
            const suffix = s.slice(word.length);
            if (canConcat(suffix, words, memo) === true) {
                memo[s] = true;
                return memo[s];
            }
        }
    }

    memo[s] = false;
    return memo[s];
};

module.exports = {
    canConcat,
};

// s = length of string
// w = # of words
// Time: ~O(sw)
// Space: O(s)