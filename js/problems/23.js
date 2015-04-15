/*
Non-abundant sums
Problem 23
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that 
cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(limit) {
	var result = findSum(limit);
	euler.answer(result);

}(28123));

function findSum(limit) {
	var abundantNumbers = [],
		sum = 0;

	math.range(0, 28123).forEach(function(i) {
		if(math.abundant(i)) {
			abundantNumbers.push(i);
		}

		if(!canBeWrittenAsSumOfTwoAbundantNumbers(abundantNumbers, i)) {
			sum += i;
		}
	});
	return sum;
}

function canBeWrittenAsSumOfTwoAbundantNumbers(numbers, n) {
	var i = 0, 
		j = 0,
		stop = numbers.length - 1,
		intermediate;

	if (!numbers.length) {
		return false;
	}

	do {
		intermediate = numbers[i] + numbers[j];
		if (intermediate === n) {
			return true;
		}
		else if (intermediate < n && j < stop) {
			j++;
		}
		else if (i < stop) {
			j = i;
			i++;
		}
		else {
			return false;
		}

	} while(true);
}