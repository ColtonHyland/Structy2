class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
    const queue = [root];
    let current = null;
    while (queue.length > 0) {
        current = queue.shift();
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return current.val;
};

module.exports = {
    bottomRightValue,
};

// n = number of nodes
// Time: O(n^2)
// Space: O(n)