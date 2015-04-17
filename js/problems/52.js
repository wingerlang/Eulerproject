/*
Permuted multiples
Problem 52
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/


var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(start, multiples) {
	var result = findInteger(start, multiples);

	euler.answer(result);
}(1, [2,3,4,5,6]));

function findInteger(n, multiples) {
	while(!isPermutedMultiples(++n, multiples));
	return n;
}

function isPermutedMultiples(n, multiples) {
	return multiples.map(math.times.bind(null, n))
		.every(string.isPermutation.bind(null, n));
}