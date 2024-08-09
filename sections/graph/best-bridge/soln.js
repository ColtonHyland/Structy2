const bestBridge = (grid) => {
    let mainIsland;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const potentialIsland = findIsland(grid, r, c, new Set());
            if (potentialIsland.size > 0) mainIsland = potentialIsland;
            // break;
        }
    }

    const visited = new Set(mainIsland);
    const queue = [];
    for (let pos of mainIsland) {
        const [r, c] = pos.split(',').map(Number);
        queue.push([r, c, 0]);
    }

    while (queue.length > 0) {
        const [r, c, distance] = queue.shift();
        const pos = r + ',' + c;
        if (grid[r][c] === 'L' && !mainIsland.has(pos)) return distance - 1;

        const deltas = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        for (let delta of deltas) {
            const [deltaRow, deltaCol] = delta;
            const neighborRow = r + deltaRow;
            const neighborCol = c + deltaCol;
            const neighborPos = neighborRow + ',' + neighborCol;
            if (isInbound(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
                queue.push([neighborRow, neighborCol, distance + 1]);
                visited.add(neighborPos);
            }
        }
    }
};

const isInbound = (grid, row, col) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    return rowInbounds && colInbounds;
};

const findIsland = (grid, row, col, visited) => {
    if (!isInbound(grid, row, col) || grid[row][col] === 'W') return visited;

    let pos = row + ',' + col;
    if (visited.has(pos)) return visited;
    visited.add(pos);

    findIsland(grid, row - 1, col, visited);
    findIsland(grid, row + 1, col, visited);
    findIsland(grid, row, col - 1, visited);
    findIsland(grid, row, col + 1, visited);

    return visited;
};

module.exports = {
    bestBridge,
};
