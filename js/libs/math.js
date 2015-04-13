'use strict';

function range_r(n) {
    return Array.apply(null, {length: n}).map(Number.call, Number);
}

function range(start, stop, step) {
	var numberRange = [];
	step = step || 1;

	for(var i = start; i < stop; i+= step) {
		numberRange.push(i);
	}
	return numberRange;
}

function max(numbers) {
	var maxVal = 0;

	numbers.forEach(function (num) {
		if (num > maxVal) {
			maxVal = num;
		}
	});
	return maxVal;
}

function divisibleBy(num, divisor) {
	return num % divisor === 0;
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
	return divisors(n).length;
}

function divisors(n) {
	var divisors = [1, n];
	
	for(var i = 2; i < n; i++) {
		if (divisibleBy(n, i)) {
			divisors.push(i);
		}
	}
	return divisors;
}

function isEven(x) {
	return x % 2 === 0;
}
function isOdd(x) {
	return x % 2 === 1;
}

function add(a, b) {
	return a + b;
}
function times(a, b) {
	return a * b;
}
function product(numbers) {
	if (numbers.length === 0) return NaN;
	return numbers.reduce(times);
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

function floor_sqrt(n) {
	return Math.floor(Math.sqrt(n));
}
function ceil_sqrt(n) {
	return Math.ceil(Math.sqrt(n));	
}

function isPrime(n) {
	if (n < 2) return false;
	if (n === 2) return true;

	var stop = ceil_sqrt(n);
	for(var divisor = 2; divisor <= stop; divisor++) {
		if (divisibleBy(n, divisor)) {
			return false;
		}
	}
	return true;
}

function primeFactors(n) {
	var factors = [],
		stop = ceil_sqrt(n);

	for(var i = 2; i <= stop; i++ ) {
		while(divisibleBy(n, i)) {
			factors.push(i);
			n /= i;
		}
	}
	return factors;
}

function primeNumber(primeNumber) {
	var primes = [],
		i = 1;

	while (primes.length < primeNumber) {
		if (isPrime(++i)) {
			primes.push(i);
		}
	}
	return i;
}

function isPythagoreanTriplet(a, b, c) {
	return (a < b) 
		&& (b < c) 
		&& (pow2(a) + pow2(b)) === pow2(c)
}

module.exports = {
	range: range,
	
	divisibleBy: divisibleBy,
	divisibleBySome: divisibleBySome,
	divisibleByAll: divisibleByAll,
	divisors: divisors,
	numDivisors: numDivisors,

	isEven: isEven,
	isOdd: isOdd,
	add: add,
	times: times,
	factorial: factorial,
	pow2: pow2,
	digits: digits,
	equals: equals,
	max: max,

	primeFactors: primeFactors,
	isPrime: isPrime,
	primeNumber: primeNumber,
	product: product,

	isPythagoreanTriplet: isPythagoreanTriplet,
};