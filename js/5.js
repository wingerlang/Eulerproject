/*

	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

(function solve() {
	var i = 1,
		r = range(20);

	while (i++) {
		if (divisibleByAll(r, i)) {
			break
		}
	}
	console.log('Result', i);
}());

function divisibleByAll(list, x) {
	return list.every(function(e) {
		return divisibleBy(x, e+1);
	});
}

function range(n) {
    return Array.apply(null, {length: n}).map(Number.call, Number);
}

function divisibleBy(a, b) {
	return a % b === 0;
}