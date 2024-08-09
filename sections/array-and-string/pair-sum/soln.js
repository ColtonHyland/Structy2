const pairSum = (numbers, targetSum) => {
    const prev = {};
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const diff = targetSum - num;
        if (diff in prev) {
            return [prev[diff], 1];
        }
        prev[num] = i;
    }
};

module.exports = {
    pairSum,
};

// n = numbers length
// Time: O(n)
// Space: O(n)
