/*

Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(max) {
	var result = primeSums(max);

	euler.answer(result);

}(2000000));

function primeSums(max) {
	var sum = 2;

	for(var i = sum + 1; i < max; i += 2) {
		if(math.isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}