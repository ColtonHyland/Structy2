const subsets = (elements) => {
    if (elements.length === 0) return [[]];

    const ele = elements[0];
    const remainingElements = elements.slice(1);
    const subsetsWithoutEle = subsets(remainingElements);
    const subsetsWithEle = subsetsWithoutEle.map((sub) => [ele, ...sub]);
    return [...subsetsWithoutEle, ...subsetsWithEle];
};

// n = length of array
// Time: O(2^n)
// Space: O(2^n)
