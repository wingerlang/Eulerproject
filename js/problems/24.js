/*
	Lexicographic permutations
	Problem 24
	A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

	012   021   102   120   201   210

	What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

var utils = require('./utils');

(function solve() {
	var result;

	utils.answer(result);

}());


/*

	generate all permutations that start with 0
	generate all permutations that start with 1
	generate all permutations that start with 2

*/

var numbers = "012";

function permutate(input) {
	var permutations = {};

	for(var i = 0; i < input.length; i++) {
		
	}

	return permutations;
}

console.log(permutate(numbers));

// 012   021   102   120   201   210