// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const lowestCommonAncestor = (root, val1, val2) => {
    const path1 = findPath(root, val1);
    const path2 = findPath(root, val2);
    const set2 = new Set(path2);

    for (let val of path1) {
        if (set2.has(val)) return val;
    }
};

const findPath = (root, targetVal) => {
    if (root === null) return null;

    if (root.val === targetVal) return [root.val];

    const leftPath = findPath(root.left, targetVal);
    if (leftPath !== null) {
        leftPath.push(root.val);
        return leftPath;
    }

    const rightPath = findPath(root.right, targetVal);
    if (rightPath !== null) {
        rightPath.push(root.val);
        return rightPath;
    }
};

module.exports = {
    lowestCommonAncestor,
};
