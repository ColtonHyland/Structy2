class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const isUnivalueList = (head) => {
    let current = head;

    while (current !== null) {
        if (current.val !== head.val) return false;
        current = current.next;
    }

    return true;
};

// n = length of list
// Time: O(n)
// Space: O(1)

// RECURSIVE

// const isUnivalueList = (head) => {
//     const next = head.next;
//     if (next === null) return true;
//     if (head.val !== next.val) return false;
//     return isUnivalueList(next);
// };

// n = length of list
// Time: O(n)
// Space: O(n)

module.exports = {
    isUnivalueList,
};
