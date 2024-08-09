const compress = (s) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (j <= s.length) {
        if (s[i] == s[j]) {
            j++;
        } else {
            let num = s.slice(i, j).length;
            if (num !== 1) result.push(num);
            result.push(s[i]);
            i = j;
        }
    }

    return result.join('');
};

module.exports = {
    compress,
};

// n = length of string
// Time: O(n)
// Space: O(n)
