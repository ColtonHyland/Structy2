// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments.
// The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
    const result = [];
    const items = new Set();
    for (let item of a) {
        items.add(item);
    }
    for (let item of b) {
        if (items.has(item)) {
            result.push(item);
        }
    }
    return result;
};

module.exports = {
    intersection,
};

// n = length of a, m = length of b
// Time: O(n+m)
// Space: O(n)


// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
// intersection([2,4,6], [4,2]) // -> [2,4]
// intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
// intersection([0,1,2], [10,11]) // -> []
// const a = [];
// const b = [];
// for (let i = 0; i < 50000; i += 1) {
//   a.push(i);
//   b.push(i);
// }
// intersection(a, b) // -> [0,1,2,3,..., 49999]