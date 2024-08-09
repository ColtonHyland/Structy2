const nestingScore = (str) => {
    const stack = [0];
    for (let char of str) {
        if (char === ']') {
            const popped = stack.pop();
            if (popped === 0) {
                stack[stack.length - 1] += 1;
            } else {
                stack[stack.length - 1] += popped * 2;
            }
        } else {
            stack.push(0);
        }
    }
    return stack.pop();
};

module.exports = {
    nestingScore,
};

// n = lengt of Str
// Time: O(n)
// Space: O(n)
