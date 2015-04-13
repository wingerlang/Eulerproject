/*

If we list all the natural numbers below 10 that are multiples of 
	3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

	Find the sum of all the multiples of 3 or 5 below 1000.
*/

var math = require('../libs/math'),
	euler = require('../libs/euler');

(function solve(upTo) {
    var result = math.range(0, upTo)
	    .filter(math.divisibleBySome.bind(null, [3, 5]))
	    .reduce(math.add);


    euler.answer(result);
}(1000));