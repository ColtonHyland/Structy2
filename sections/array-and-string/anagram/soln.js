const anagrams = (s1, s2) => {
    const count = {};
    for (let char of s1) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1;
    }

    for (let char of s2) {
        if (char in count) {
            count[char] -= 1;
        } else {
            return false;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
};

module.exports = {
    anagrams,
};

// let n = length of s1
// let m = length of s2
// Time: O(n + m)
// Space: O(n)
