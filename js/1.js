/*

If we list all the natural numbers below 10 that are multiples of 
	3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

	Find the sum of all the multiples of 3 or 5 below 1000.
*/

function isMultipleOf(num, multiple) {
	return  num % multiple === 0;
}

function isMultiple(n) {
    return isMultipleOf(n, 3) 
        || isMultipleOf(n, 5);
}

function range(n) {
    return Array.apply(null, {length: n}).map(Number.call, Number);
}

function sum(a, b) {
    return a + b;
}

(function solve(upTo) {
    var result = range(upTo).filter(isMultiple).reduce(sum);
    
    console.log(result);
}(1000));