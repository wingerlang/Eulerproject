/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var math = require('./math'),
	string = require('./string'),
	euler = require('./euler');

(function solve(n, upper) {
	var range = math.range(0, upper);
	while (!divisibleByAll(range, ++n));
	
	euler.answer(n);
}(1, 20));

function divisibleByAll(list, x) {
	return list.every(function(e) {
		return math.divisibleBy(x, e+1);
	});
}