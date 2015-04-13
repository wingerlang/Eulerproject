/*
	10001st prime
	Problem 7
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

	What is the 10 001st prime number?

*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(n) {
	var result = math.primeNumber(n);

	euler.answer(result);
}(10001));
