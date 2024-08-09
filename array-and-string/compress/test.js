// compress
// Write a function, compress, that takes in a string as an argument.
// The function should return a compressed version of the string where
// consecutive occurrences of the same characters are compressed into
// the number of occurrences followed by the character. Single character
// occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// compress('aaa'); // -> '3a'
// compress('cc'); // -> '2c'
// compress('t'); // -> 't'
// compress('aaabbc'); // -> '3a2bc'
// compress('zzzzzz'); // -> '6z'
// compress(''); // -> ''
// compress('ababab'); // -> 'ababab'
// compress('AAAbbCc'); // -> '3A2bCc'
// compress('a'.repeat(100)); // -> '100a'
// compress('aaabbbaaa'); // -> '3a3b3a'