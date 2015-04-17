/*
	Truncatable primes
	Problem 37
	Published on Friday, 14th February 2003, 07:00 pm; Solved by 42927; Difficulty rating: 5%
	The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

	Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

	NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(num) {
	var result = findSum(num);

	euler.answer(result);

}(11));

function findSum(num) {
	var found = 0,
		sum = 0,
		n = 8;

	while( found < num) {
		if(isTruncatablePrime(n)) {
			sum += n;
			found++;
		}
		n++;
	}
	return sum;
}

function isTruncatablePrime(n) {
	n = n.toString();
	var len = n.length;

	return math.isPrime(n) && math.range(1, len).every(function(i) {
		return math.isPrime(Number(n.substring(len, i))) && math.isPrime(Number(n.substring(0, i)))
	});
}


//console.log(isTruncatablePrime(43));