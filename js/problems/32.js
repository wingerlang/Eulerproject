/*
Pandigital products
Problem 32

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/


var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve() {
	var result;

	euler.answer(result);
}());


function findSolution() {
	var sum = 0;
	var pairs = [];

	for (var n = 1; n < 10000; n++) {
		for(var i = 2; i < Math.sqrt(n); i++) {
			//console.log(n, i)
			if (math.isEven(n/i)) {
				//console.log('iseven', n, i)
				if(i * n/i === n) {
					console.log(i,'*','n/i',n/i, n)
					if (math.isPandigital('' + i + n/i + n)) {
						sum += i * n
						console.log('IS PANDIGITAL!', i, n/i, n);
						paris.push([i,n, n*i]);
					}
				}
			}
		}
	}
	console.log(sum);
	console.log(pairs);

}

console.log(findSolution(7254));