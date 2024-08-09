const minimumIsland = (grid) => {
  let smallest = Infinity;
  const visited = new Set();
  const sizes = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = searchGrid(grid, row, col, visited);
      if (size > 0 && size < smallest) smallest = size;
    }
  }
  return smallest;
};

const searchGrid = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;
  
  let pos = row + ',' + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);
  
  if (grid[row][col] === 'W') return 0;
  
  let size = 1;
  
  size += searchGrid(grid, row - 1, col, visited);
  size += searchGrid(grid, row + 1, col, visited);
  size += searchGrid(grid, row, col - 1, visited);
  size += searchGrid(grid, row, col + 1, visited);
  
  return size;
};

module.exports = {
  minimumIsland,
};

// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)