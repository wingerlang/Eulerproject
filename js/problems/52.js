/*
Permuted multiples
Problem 52
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/


var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve() {
	var result = findInteger();

	euler.answer(result);
}());



function findInteger() {
	var n = 1;
	while(n++) {
		if(isPermutedMultiples(n)) {
			return n;
		}
	}
}

function isPermutedMultiples(n) {
	return math.range(2, 7).map(math.times.bind(null, n))
		.map(string.isPermutation.bind(null, n)).every(math.truthy);
}
//3.9s
// 6
// 5
// 4.87