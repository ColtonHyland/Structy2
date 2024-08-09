// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const binarySearchTreeIncludes = (root, target) => {
    if (root === null) return false;

    if (root.val === target) return true;

    if (target < root.val) {
        return binarySearchTreeIncludes(root.left, target);
    } else {
        return binarySearchTreeIncludes(root.right, target);
    }
};

module.exports = {
    binarySearchTreeIncludes,
};

// n = number of nodes

// Worst Case

// Time: O(n)
// Space: O(n)
// Best Case (balanced-tree)

// Time: O(log(n))
// Space: O(log(n))