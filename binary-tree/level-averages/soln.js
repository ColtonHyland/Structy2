class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
    const levels = [];
    levelAveragesHelper(root, levels, 0);
    const averages = [];
    for (let level of levels) {
        averages.push(getAvg(level));
    }
    return averages;
};

const levelAveragesHelper = (root, levels, levelNum) => {
    if (root === null) return;
    if (levels.length === levelNum) {
        levels.push([root.val]);
    } else {
        levels[levelNum].push(root.val);
    }
    levelAveragesHelper(root.left, levels, levelNum + 1);
    levelAveragesHelper(root.right, levels, levelNum + 1);
};

const getAvg = (level) => {
    let sum = 0;
    for (let num of level) {
        sum = sum + num;
    }
    return sum / level.length;
};

// n = number of nodes in the binary tree
// h = height of the binary tree
// Time: O(n)
// Space: O(h)

module.exports = {
    levelAverages,
};
