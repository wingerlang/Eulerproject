/*

Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var math = require('./math'),
	string = require('./string'),
	euler = require('./euler');

(function solve(number) {
	var result = math.max(math.primeFactors(number));

	euler.answer(result);

}(600851475143));