const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
    const key = kr + ',' + kc + ',' + m;
    if (key in memo) return memo[key];

    if (kr < 0 || kr >= n || kc < 0 || kc >= n) return 0;

    if (m === 0) {
        if (kr === pr && kc === pc) {
            return 1;
        } else {
            return 0;
        }
    }

    const moves = [
        [kr + 2, kc + 1],
        [kr - 2, kc + 1],
        [kr + 2, kc - 1],
        [kr - 2, kc - 1],
        [kr + 1, kc + 2],
        [kr - 1, kc + 2],
        [kr + 1, kc - 2],
        [kr - 1, kc - 2],
    ];

    let numOfWays = 0;
    for (let move of moves) {
        const [r, c] = move;
        numOfWays += knightlyNumber(n, m - 1, r, c, pr, pc, memo);
    }

    memo[key] = numOfWays;
    return memo[key];
};

module.exports = {
    knightlyNumber,
};

// n = length of the board
// m = number of moves
// Time: O(m * n^2)
// Space: O(m * n^2)