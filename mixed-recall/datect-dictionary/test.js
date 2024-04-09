// detect dictionary
// Write a function, detectDictionary, that takes in a dictionary of words and an
// alphabet string. The function should return a boolean indicating whether or
// not all words of the dictionary are lexically-ordered according to the
// alphabet.

// You can assume that all characters are lowercase a-z.

// You can assume that the alphabet contains all 26 letters.

// const dictionary = ["zoo", "tick", "tack", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// detectDictionary(dictionary, alphabet); // -> true
// const dictionary = ["zoo", "tack", "tick", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// detectDictionary(dictionary, alphabet); // -> false
// const dictionary = ["zoos", "zoo", "tick", "tack", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// detectDictionary(dictionary, alphabet); // -> false
// const dictionary = ["miles", "milestone", "proper", "process", "goal"];
// const alphabet = "mnoijpqrshkltabcdefguvwzxy";
// detectDictionary(dictionary, alphabet); // -> true
// const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal"];
// const alphabet = "mnoijpqrshkltabcdefguvwzxy";
// detectDictionary(dictionary, alphabet); // -> true
// const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"];
// const alphabet = "mnoijpqrshkltabcdefguvwzxy";
// detectDictionary(dictionary, alphabet); // -> false
