var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve() {
	var result;

	euler.answer(result);

}());

// 2**100


(function() {
	var lastDigit = 0;
	var num = 2;
	var target = Math.pow(2, 10);
	var rest = 0;
	var numString;

	var carry = 0;

	for(var i = 2; i <= 10; i++) {
		num *= 2;
		numString = num.toString();

		console.log('i',i, num, Math.pow(2, i));

		if (num > 10) {
			lastDigit = num % 10;
		}

		if (num > 100) {
			num = numString.slice(2);
			console.log()
		}
	}

	console.log('Target', target, 'Result', lastDigit);
	console.log('Rest', rest);
}());

/* Last digit:

(function() {
	var lastDigit = 0;
	var num = 2;
	var target = Math.pow(2, 10);
	var rest = 0;
	var numString;

	var carry = [];

	for(var i = 2; i <= 10; i++) {
		num *= 2;
		numString = num.toString();

		if (num > 10) {
			lastDigit = num % 10;
		}

		if (num > 100) {
			num = numString.slice(2);
		}
	}

	console.log('Target', target, 'Result', lastDigit);
	console.log('Rest', rest);
}());

*/