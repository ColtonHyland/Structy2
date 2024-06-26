// parenthetical possibilities
// Write a function, parentheticalPossibilities, that takes in a string as an 
// argument. The function should return an array containing all of the strings
// that could be generated by expanding all parentheses of the string into its
// possibilities.

// For example, the possibilities for 'x(mn)yz' are 'xmyz', 'xnyz'.

// parentheticalPossibilities('x(mn)yz'); // -> 
// // [ 'xmyz', 'xnyz' ]
// parentheticalPossibilities("(qr)ab(stu)c"); // ->
// // [ 'qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc' ]
// parentheticalPossibilities("taco"); // ->
// // ['taco']
// parentheticalPossibilities(""); // ->
// // ['']
// parentheticalPossibilities("(etc)(blvd)(cat)"); // ->
// // [
// //  'ebc', 'eba', 'ebt', 'elc', 'ela',
// //  'elt', 'evc', 'eva', 'evt', 'edc',
// //  'eda', 'edt', 'tbc', 'tba', 'tbt',
// //  'tlc', 'tla', 'tlt', 'tvc', 'tva',
// //  'tvt', 'tdc', 'tda', 'tdt', 'cbc',
// //  'cba', 'cbt', 'clc', 'cla', 'clt',
// //  'cvc', 'cva', 'cvt', 'cdc', 'cda',
// //  'cdt'
// // ]