const createCombinations = (items, k) => {
    if (k === 0) return [[]];
    if (k > items.length) return [];

    const ele = items[0];

    const combosWithEle = [];
    for (let combo of createCombinations(items.slice(1), k - 1)) {
        comboWithEle.push([first, ...combo]);
    }

    const combosWithoutele = createCombinations(items.slice(1), k);

    return [...combosWithEle, ...combosWithoutele];
};

module.exports = {
    createCombinations,
};

// n = length of items
// k = target length
// Time: ~O(n choose k)
// Space: ~O(n choose k)
