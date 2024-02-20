// uncompress
// Write a function, uncompress, that takes in a string as an argument.
// The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where
//  each 'char' of a group is repeated 'number' times consecutively.
//  You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
    const numbers = '0123456789';
    let result = '';
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j++;
        } else {
            const num = Number(s.slice(i, j));
            for (let count = 0; count < num; count++) {
                result += s[j];
            }
            j++;
            i = j;
        }
    }

    return result;
};

module.exports = {
    uncompress,
};

// n = # of groups
// m = max number for any group
// Time: O(nm)
// Space: O(nm)