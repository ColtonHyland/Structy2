const pairProduct = (numbers, targetProduct) => {
    const prevNums = {};
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const quotient = targetProduct / num;
        if (quotient in prevNums) {
            return [prevNums[quotient], i];
        }
        prevNums[num] = i;
    }
};

module.exports = {
    pairProduct,
};

// n = numbers length
// Time: O(n)
// Space: O(n)
