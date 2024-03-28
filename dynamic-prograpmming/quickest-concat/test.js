// quickest concat
// Write a function, quickestConcat, that takes in a string and an array of words as 
// arguments. The function should return the minimum number of words needed to build
// the string by concatenating words of the array.

// You may use words of the array as many times as needed.

// quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2
// quickestConcat('caution', ['ion', 'caut', 'caution']); // -> 1
// quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']); // -> 4
// quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch']); // -> 3
// quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']); // -> -1
// quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu']); // -> 2
// quickestConcat('rongbetty', ['wrong', 'bet']); // -> -1
// quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']); // -> 7