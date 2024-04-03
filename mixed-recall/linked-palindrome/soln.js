// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedPalindrome = (head) => {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values.join(' ') === values.reverse().join(' ');
};

module.exports = {
    linkedPalindrome,
};

// n = number of nodes
// Time: O(n)
// Space: O(n)
