const decompressBraces = (s) => {
    const stack = [];
    const numberChars = '123456789';
    for (let char of s) {
        if (numberChars.includes(char)) {
            stack.push(Number(char));
        } else {
            if (char === '}') {
                let segment = '';
                while (typeof stack[stack.length - 1] !== 'number') {
                    const popped = stack.pop();
                    segment = popped + segment;
                }
                const num = stack.pop();
                stack.push(repeat(segment, num));
            } else if (char !== '{') {
                stack.push(char);
            }
        }
    }

    return stack.join('');
};

const repeat = (segment, num) => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += segment;
    }
    return result;
};

module.exports = {
    decompressBraces,
};

// s = length of string
// m = count of brace pairs
// Time: O((9^m) * s)
// Space: O((9^m) * s)