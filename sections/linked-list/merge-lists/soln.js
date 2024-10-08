class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const mergeLists = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;
    let head = new Node(null);
    let tail = head;
    while (current1 !== null && current2 !== null) {
        if (current1.val > current2.val) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
    }
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    return head.next;
};

// n = list 1 length, m = list 2 length
// Time: O(min(m,n))
// Space: O(1)

// RECURSIVE

// const mergeLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null;
//     if (head1 === null) return head2;
//     if (head2 === null) return head1;
//     if (head1.val < head2.val) {
//         const next1 = head1.next;
//         head1.next = mergeLists(next1, head2);
//         return head1;
//     } else {
//         const next2 = head2.next;
//         head2.next = mergeLists(head1, next2);
//         return head2;
//     }
// };

// n = list 1 length, m = list 2 length
// Time: O(min(m,n))
// Space: O(min(m,n))

module.exports = {
    mergeLists,
};
