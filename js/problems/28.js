/*

Number spiral diagonals
Problem 28
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/


var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(size) {
	var result = sumCorners(size);

	euler.answer(result);
}(1001));

function sumCorners(size) {
	return 1 + math.range(3, size+1, 2)
		.map(formula)
		.reduce(math.add);
}

function formula(n) {
	return 6 + (4 * Math.pow(n,2)) - (6 * n)
}