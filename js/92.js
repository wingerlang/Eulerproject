/*

Square digit chains
Problem 92
A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?

*/

var utils = require('./utils');

(function solve(upTo) {
	var result = calculate(upTo);
	utils.answer(result);

}(10000000));

function calculate(upTo) {
	var equals89 = utils.equals.bind(null, 89);
	return utils.range(1, upTo).map(chain).filter(equals89).length;
}

function chain(n) {
	if (n == 1 || n == 89) return n;
	return chain(utils.digits(n).map(utils.pow2).reduce(utils.add));
}