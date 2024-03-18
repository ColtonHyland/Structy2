const islandCount = (grid) => {
    let count = 0;
    const visited = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (traverseGrid(grid, r, c, visited) === true) {
                count++;
            }
        }
    }
    return count;
};

const traverseGrid = (grid, row, col, visited) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    if (!rowInbounds || !colInbounds) return false;
    if (grid[row][col] === 'W') return false;

    const pos = row + ',' + col;
    if (visited.has(pos)) return false;
    visited.add(pos);

    traverseGrid(grid, row - 1, col, visited);
    traverseGrid(grid, row + 1, col, visited);
    traverseGrid(grid, row, col - 1, visited);
    traverseGrid(grid, row, col + 1, visited);

    return true;
};

// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

module.exports = {
    islandCount,
};
