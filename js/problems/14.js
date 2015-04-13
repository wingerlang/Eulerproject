/*

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(start, upper) {
	var longest = {
		start: undefined,
		list: []
		},
		chain;
	
	while (start < upper) {
		chain = seq(start, []);
		if (chain.length > longest.list.length) {
			longest.list = chain;
			longest.start = start;
		}
		start++;
	};
	euler.answer(longest.start);
}(1, 999999));


function seq(n, l) {
	if (n === 1) 
		return l.concat([n]);
	}
	return seq( transform(n), l.concat([n]));
}
function transform(x) {
	return math.isEven(x) ? decrease(x) : increase(x);
}

function increase(x) {
	return (3*x) +1;
}

function decrease(x) {
	return Math.ceil(x/2);
}