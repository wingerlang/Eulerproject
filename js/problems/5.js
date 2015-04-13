/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(n, upper) {
	var range = math.range(0, upper);
	while (!math.divisibleByAll(range, ++n));
	
	euler.answer(n);
}(1, 20));