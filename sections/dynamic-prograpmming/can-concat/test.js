// can concat
// Write a function, canConcat, that takes in a string and an array of words as 
// arguments. The function should return boolean indicating whether or not it is
// possible to concatenate words of the array together to form the string.

// You may reuse words of the array as many times as needed.

// canConcat("oneisnone", ["one", "none", "is"]); // -> true
// canConcat("oneisnone", ["on", "e", "is"]); // -> false
// canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
// canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
// canConcat("santahat", ["santah", "hat"]); // -> false
// canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
// canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false
// canConcat("fooisgood", ["foo", "is", "g", "ood", "f"]); // -> true