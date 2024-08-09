// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListCycle = (head, visited = new Set()) => {
    if (head === null) return false;
    if (visited.has(head.val)) return true;
    visited.add(head.val);
    return linkedListCycle(head.next, visited);
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// const linkedListCycle = (head) => {
//     let slow = head;
//     let fast = head;
//     let firstIteration = true;
//     while (fast !== null && fast.next !== null) {
//         if (slow === fast && !firstIteration) return true;

//         slow = slow.next;
//         fast = fast.next;
//         firstIteration = false;
//     }

//     return false;
// };

// n = number of nodes
// Time: O(n)
// Space: O(1)

module.exports = {
    linkedListCycle,
};




