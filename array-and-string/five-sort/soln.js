const fiveSort = (nums) => {
    i = 0;
    j = nums.length - 1;
    while (i < j) {
        if (nums[j] === 5) {
            j--;
        } else if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    return nums;
};

module.exports = {
    fiveSort,
};

// n = nums length
//Time: O(n)
//Space: O(1)
