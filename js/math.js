'use strict';


function range_r(n) {
    return Array.apply(null, {length: n}).map(Number.call, Number);
}

function range(start, stop, step) {
	var l = [];
	step = step || 1;

	for(var i = start; i < stop; i+= step) l.push(i);
	return l;
}

function divisibleBy(num, divisor) {
	return num % divisor === 0;
}

function max(numbers) {
	var maxVal = 0;

	numbers.forEach(function (num) {
		if (num > maxVal)
			maxVal = num;
	});
	return maxVal;
}

function divisibleByAll(divisors, num) {
	return divisors.every(function(divisor) {
		return divisibleBy(num, divisor);
	});
}

function divisibleBySome(divisors, num) {
	return divisors.some(function(divisor) {
		return divisibleBy(num, divisor);
	});
}

function numDivisors(n) {
	var divisors = [1, n];
	
	for(var i = 2; i < n; i++) {
		if (divisibleBy(n, i)) {
			divisors.push(i);
		}
	}
	return divisors.length;
}

function isEven(x) {
	return x % 2 === 0;
}
function add(a, b) {
	return a + b;
}

function factorial(n) {
	if (n < 2) return 1;
	return n * factorial(n-1);
}
function pow2(n) {
	return Math.pow(n, 2);
}

function digits(n) {
	return n.toString().split('').map(Number);
}

function equals(a, b) {
	return a === b;
}

function isPrime(n) {
	for(var divisor = 1; divisor < n; divisor++) 
		if (divisibleBy(n, divisor))
			return false;
	return true;
}

function floor_sqrt(n) {
	return Math.floor(Math.sqrt(n));
}

function primeFactors(n) {
	var factors = [],
		stop = floor_sqrt(n);

	for(var i = 2; i <= stop; i++ ) {
		while(divisibleBy(n, i)) {
			factors.push(i);
			n /= i;
		}
	}

	return factors;
}

module.exports = {
	range_r: range_r,
	range: range,
	
	divisibleBy: divisibleBy,
	divisibleBySome: divisibleBySome,
	divisibleByAll: divisibleByAll,
	numDivisors: numDivisors,

	isEven: isEven,
	add: add,
	factorial: factorial,
	pow2: pow2,
	digits: digits,
	equals: equals,
	max: max,

	primeFactors: primeFactors,
	isPrime: isPrime
};