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

function max(a, b) {
	if (Array.isArray(a)) {
		if (typeof b == 'number') {
			return maxNumber(maxArray(a), b)
		} else {
			return maxArray(a);
		}
	} else if (typeof a == 'number' && typeof b == 'number') {
		return maxNumber(a, b);
	}
	else {
		return NaN;
	}
}

function maxNumber(a, b) {
	return a > b ? a : b;
}

function maxArray(numbers) {
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
	var divisors = [],
		//step = 1 + n % 2,
		stop = Math.floor(Math.sqrt(n));
	
	for(var i = 1; i <= stop; i++){
		if (divisibleBy(n, i)) {
			divisors.push(i);
			divisors.push(n / i);
		}
	}
	return divisors;
}

function properDivisorsOf(n) {
	return range(0, n).filter(function(i) {
		return divisibleBy(n, i);
	});
}

function isPerfectNumber(n) {
	return n === properDivisorsOf(n).reduce(add);
}

function deficient(n) {
	return properDivisorsOf(n)
		.reduce(add, 0) < n;
}

function abundant(n) {
	return properDivisorsOf(n)
		.reduce(add, 0) > n;
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

function isAmicableNumber(n) {
	var a = properDivisorsOf(n).reduce(add, 0);
	var b = properDivisorsOf(a).reduce(add, 0);
	return b == n && a !== b;
}

function isPandigital(n) {
	n = n.toString();

	return n.length === 9 
		&& range(1, 10).every(indexOf.bind(null, n));
}

function indexOf(haystack, needle) {
	return haystack.indexOf(needle) >= 0;
}


module.exports = {
	range: range,
	
	divisibleBy: divisibleBy,
	divisibleBySome: divisibleBySome,
	divisibleByAll: divisibleByAll,
	divisors: divisors,
	numDivisors: numDivisors,
	properDivisorsOf: properDivisorsOf,
	isPerfectNumber: isPerfectNumber,
	 ficient: deficient,
	abundant: abundant,

	isEven: isEven,
	isOdd: isOdd,
	add: add,
	times: times,
	factorial: factorial,
	pow2: pow2,
	digits: digits,
	equals: equals,
	
	max: max,
	maxNumber: maxNumber,
	maxArray: maxArray,

	primeFactors: primeFactors,
	isPrime: isPrime,
	primeNumber: primeNumber,
	product: product,
	isAmicableNumber: isAmicableNumber,
	isPandigital: isPandigital,
	indexOf: indexOf,

	isPythagoreanTriplet: isPythagoreanTriplet,
};