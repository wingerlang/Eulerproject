/*
Sub-string divisibility
Problem 43
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
*/
var utils = require('./utils');

// wtf retard.
// GENERATE all pandigital numbers instead of looping to 0-1000000000000000000000000000000. (x(x_(x_x)_x)x)
(function solve(num, stop) {
	var result;

	for(; num < stop; num++) {
		if (isPandigital(num) && isDivisible(num)) {
			result += num;
			console.log('isPandigital', num);
		}
	}

	utils.answer(result);

}(1023456789, 9876543210));

function isPandigital(n) {
	n = n.toString();
	return n.length === n.split('').map(Number).filter(onlyUnique).length;
}

function isDivisible(n) {
	var i = 1, 
	j = 4;

	return [2, 3, 5, 7, 11,13, 17].every(function(d) {
		return utils.divisibleBy(Number(n.toString().slice(i++, j++)), d);
	});
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// 1406357289;
// 1430952867;
// 1460357289;