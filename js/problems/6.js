/*
Sum square difference
Problem 6
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(to) {
	var result = calculateDiff(to);

	euler.answer(result);
}(101));

function calculateDiff(n) {
	return sumOfSquare(n) - squareOfSum(n);
}
function squareOfSum(to) {
	return math.range(1, to).map(math.pow2).reduce(math.add);
}
function sumOfSquare(to) {
	return math.pow2(math.range(1, to).reduce(math.add));
}