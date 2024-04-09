const tokenTransform = (s, tokens) => {
    let output = [];

    let i = 0;
    let j = 1;
    while (i < s.length) {
        if (s[i] !== '$') {
            output.push(s[i]);
            i += 1;
            j = i + 1;
        } else if (s[j] !== '$') {
            j += 1;
        } else {
            const key = s.slice(i, j + 1);
            const value = tokens[key];
            const evaluatedValue = tokenTransform(value, tokens);
            tokens[key] = evaluatedValue;
            output.push(evaluatedValue);
            i = j + 1;
            j = i + 1;
        }
    }

    return output.join('');
};
module.exports = {
    tokenTransform,
};

// n = length of longest string of value
// m = # of unique tokens
// Time: ~O(n^m)
// Space: ~O(n^m)
