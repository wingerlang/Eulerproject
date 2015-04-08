/*

If we list all the natural numbers below 10 that are multiples of 
	3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

	Find the sum of all the multiples of 3 or 5 below 1000.
*/
var utils = require('./utils');

function divisible(n) {
    return utils.divisibleByAll(n, [3, 5]);
}

(function solve(upTo) {
    var result = utils.range(upTo).filter(divisible).reduce(utils.add);
    utils.answer(result);
}(1000));