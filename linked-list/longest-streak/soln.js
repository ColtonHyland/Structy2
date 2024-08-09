class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const longestStreak = (head) => {
    let current = head;
    let prevVal = null;
    let longest = 0;
    let streak = 0;
    while (current !== null) {
        if (current.val === prevVal) {
            streak += 1;
        } else {
            streak = 1;
        }
        if (streak > longest) longest = streak;
        prevVal = current.val;
        current = current.next;
    }
    return longest;
};

// n = length of list
// Time: O(n)
// Space: O(1)

module.exports = {
    longestStreak,
};