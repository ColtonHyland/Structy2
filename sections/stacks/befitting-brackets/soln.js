const befittingBrackets = (str) => {
    const stack = [];
    const types = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let char of str) {
        if (char in types) {
            stack.push(char);
        } else {
            const opener = stack.pop();
            if (char !== types[opener]) return false;
        }
    }
    return stack.length === 0;
};

module.exports = {
    befittingBrackets,
};

// n = str length
// Time: O(n)
// Space: O(n)
