const knightAttack = (n, kr, kc, pr, pc) => {
    const visited = new Set();
    visited.add(kr + ',' + kc);
    const queue = [[kr, kc, 0]];
    while (queue.length > 0) {
        const [r, c, dist] = queue.shift();
        if (r === pr && c === pc) return dist;
        const moves = getKnightMoves(n, r, c);
        for (let move of moves) {
            const [newRow, newCol] = move;
            const newPos = newRow + ',' + newCol;
            if (!visited.has(newPos)) {
                queue.push([newRow, newCol, dist + 1]);
                visited.add(newPos);
            }
        }
    }
    return null;
};

const getKnightMoves = (n, r, c) => {
    const positions = [
        [r + 1, c + 2],
        [r - 1, c + 2],
        [r + 1, c - 2],
        [r - 1, c - 2],
        [r + 2, c + 1],
        [r - 2, c + 1],
        [r + 2, c - 1],
        [r - 2, c - 1],
    ];

    const inboundPositions = [];
    for (let pos of positions) {
        const [newRow, newCol] = pos;
        if (0 <= newRow && newRow < n && (0 <= newCol) & (newCol < n)) inboundPositions.push(pos);
    }
    return inboundPositions;
};

module.exports = {
    knightAttack,
};

// n = length of the board
// Time: O(n^2)
// Space: O(n^2)