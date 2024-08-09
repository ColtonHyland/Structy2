// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leftyNodes = (root) => {
    const vals = [];

    traverse(root, vals, 0);

    return vals;
};

const traverse = (node, vals, level) => {
    if (node === null) return;

    if (vals[level] === undefined) vals.push(node.val);

    traverse(node.left, vals, level + 1);
    traverse(node.right, vals, level + 1);
};

module.exports = {
    leftyNodes,
};
