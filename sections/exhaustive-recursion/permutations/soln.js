const permutations = (items) => {
    if (items.length === 0) return [[]];

    const ele = items[0];
    const perms = permutations(items.slice(1));

    const allPerms = [];
    for (let perm of perms) {
        for (let i = 0; i <= perm.length; i++) {
            allPerms.push([...perm.slice(0, i), ele, ...perm.slice(i)]);
        }
    }
    return allPerms;
};

module.exports = {
    permutations,
};

// n = length of items array
// Time: ~O(n!)
// Space: ~O(n!)
