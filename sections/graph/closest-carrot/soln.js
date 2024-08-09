// const closestCarrot = (grid, startRow, startCol) => {
//   return findPath(grid, startRow, startCol);
// };

const closestCarrot = (grid, startRow, startCol) => {
    const queue = [[startRow, startCol, 0]];
    let startPos = startRow + ',' + startCol;
    const visited = new Set(startPos);
    visited.add(startPos);
    while (queue.length > 0) {
        const [row, col, pathSize] = queue.shift();
        if (grid[row][col] === 'C') return pathSize;

        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        for (let delta of deltas) {
            const [deltaRow, deltaCol] = delta;
            const neighborRow = row + deltaRow;
            const neighborCol = col + deltaCol;
            const rowInBounds = 0 <= neighborRow && neighborRow < grid.length;
            const colInBounds = 0 <= neighborCol && neighborCol < grid[0].length;
            const neighborPos = neighborRow + ',' + neighborCol;
            if (rowInBounds && colInBounds && grid[row][col] !== 'X' && !visited.has(neighborPos)) {
                visited.add(neighborPos);
                queue.push([neighborRow, neighborCol, pathSize + 1]);
            }
        }
    }

    return -1;
};

module.exports = {
    closestCarrot,
};

// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)