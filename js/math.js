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

function divisibleBy(a, b) {
	return a % b === 0;
}

function divisibleByAll(l, a) {
	return l.every(function(e) {
		return divisibleBy(a, e);
	});
}

function divisibleBySome(l, a) {
	return l.some(function(e) {
		return divisibleBy(a, e);
	});
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

module.exports = {
	range_r: range_r,
	range: range,
	divisibleBy: divisibleBy,
	divisibleBySome: divisibleBySome,
	divisibleByAll: divisibleByAll,
	isEven: isEven,
	add: add,
	factorial: factorial,
	pow2: pow2,
	digits: digits,
	equals: equals
};