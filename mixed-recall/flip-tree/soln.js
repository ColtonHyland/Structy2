// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const flipTree = (root) => {
    if (root === null) return null;
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    const leftPath = flipTree(root.left);
    const rightPath = flipTree(root.right);

    return root;
};

module.exports = {
    flipTree,
};

// n = number of nodes
// Time: O(n)
// Space: O(n)
