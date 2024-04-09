// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const isBinarySearchTree = (root, target) => {
    const values = [];
    inOrderTraversal(root, values);
    return isSorted(values);
};

const inOrderTraversal = (root, values) => {
    if (root === null) return;
    inOrderTraversal(root.left, values);
    values.push(root.val);
    inOrderTraversal(root.right, values);
};

const isSorted = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i += 1) {
        const current = numbers[i];
        const next = numbers[i + 1];
        if (next < current) return false;
    }

    return true;
};

module.exports = {
    isBinarySearchTree,
};

// n = number of nodes
// Time: O(n)
// Space: O(n)