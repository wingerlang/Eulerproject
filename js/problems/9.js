/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve() {
	var result = calculate();

	euler.answer(result);

}());

function isSpecialPythagoreanTriplet(a,b,c) {
	return math.isPythagoreanTriplet(a, b, c) 
		&& correctSum(a, b, c);
}

function correctSum(a,b,c) {
	return a + b + c === 1000;
}

function calculate() {
	var a, b, c, maxA = 331, max = 998;

	for (a = 0; a < maxA; a++) {
		for (b = a + 1; b < max - a - b; b++) {
			for (c = (max - a - b) ; c < max - b; c++) {
				if (isSpecialPythagoreanTriplet(a, b, c)) {
					return a * b * c;
				}
			}
		}
	}
}