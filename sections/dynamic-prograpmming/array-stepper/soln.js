const arrayStepper = (nums, i = 0, memo = {}) => {
    if (i >= nums.length - 1) return true;
    if (i in memo) return memo[i];

    const maxStep = nums[i];
    for (let step = 1; step <= maxStep; step++) {
        if (arrayStepper(nums, step + i, memo) === true) {
            memo[i] = true;
            return memo[i];
        }
    }

    memo[i] = false;
    return memo[i];
};

module.exports = {
    arrayStepper,
};

// n = length of numbers
// Time: O(n^2)
// Space: O(n)