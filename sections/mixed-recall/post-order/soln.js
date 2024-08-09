// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const postOrder = (root) => {
  const values = [];
  postOrderTraversal(root, values);
  return values;
};

const postOrderTraversal = (root, values) => {
  if (root === null) return;
  postOrderTraversal(root.left, values);
  postOrderTraversal(root.right, values);
  values.push(root.val);
};

module.exports = {
  postOrder,
};

// n = number of nodes
// Time: O(n)
// Space: O(n)