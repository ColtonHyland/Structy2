const intersection = (a, b) => {
    const result = [];
    const items = new Set();
    for (let item of a) {
        items.add(item);
    }
    for (let item of b) {
        if (items.has(item)) {
            result.push(item);
        }
    }
    return result;
};

module.exports = {
    intersection,
};

// n = length of a, m = length of b
// Time: O(n+m)
// Space: O(n)
