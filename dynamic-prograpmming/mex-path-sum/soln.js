const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
    const pos = r + ',' + c;
    if (pos in memo) return memo[pos];
    if (r === grid.length || c === grid[0].length) return 0;
    if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

    const rightSum = maxPathSum(grid, r, c + 1, memo);
    const downSum = maxPathSum(grid, r + 1, c, memo);
    memo[pos] = Math.max(rightSum, downSum) + grid[r][c];
    return memo[pos];
};

module.exports = {
    maxPathSum,
};

// r = # rows
// c = # columns
// Time: O(r*c)
// Space: O(r*c)