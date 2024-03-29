const pairedParentheses = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            if (count === 0) {
                return false;
            }
            count--;
        }
    }

    return count === 0;
};

module.exports = {
    pairedParentheses,
};

// n = length of string
// Time: O(n)
// Space: O(1)