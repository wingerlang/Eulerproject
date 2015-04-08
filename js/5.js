/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var utils = require('./utils');

(function solve(i, upper) {
	var r = utils.range(upper);
	while (!divisibleByAll(r, ++i)) { }
	utils.answer(i);
}(1, 20));

function divisibleByAll(list, x) {
	return list.every(function(e) {
		return utils.divisibleBy(x, e+1);
	});
}