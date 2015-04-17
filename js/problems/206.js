/*

Concealed Square
Problem 206
Published on Saturday, 6th September 2008, 03:00 pm; Solved by 13528; Difficulty rating: 5%
Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,
where each “_” is a single digit.

*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');


(function solve() {
	var result = calculate();

	euler.answer(result);
}());

function calculate() {
	var pattern = /1.2.3.4.5.6.7.8.9.0/;
	var i = Math.ceil(Math.sqrt(1020304050607080900));

	while(true) {
		var res = Math.pow(++i, 2).toString();
		if(res.match(pattern)) {
			return i;
		}
	}
}

// Due to some problem with i > Math.MAX_SAFE_INTEGER, this yields the wrong solution
// Implemented in Python get correct result.