/*
	A palindromic number reads the same both ways. 
	The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
	Find the largest palindrome made from the product of two 3-digit numbers.
*/
var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(upTo) {
	var largest = 0, intermediate = 0;

	for(var i = upTo; i > 0; i--) {
		for(var j = upTo; j > 0; j--) {
			intermediate = i*j;
			if (string.isPalindromeNumber(intermediate) && intermediate > largest) {
				largest = intermediate;
			}
		}
	}
	euler.answer(largest);
}(1000));

// 405ms