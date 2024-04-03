// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const middleValue = (head) => {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values[Math.floor(values.length / 2)];
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

// const middleValue = (head) => {
//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow.val;
// };

// n = number of nodes
// Time: O(n)
// Space: O(1)

module.exports = {
    middleValue,
};
