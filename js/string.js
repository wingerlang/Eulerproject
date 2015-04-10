'use strict';

function isPalindrome(s) {
	return s.toString() === s.toString().split("").reverse().join("");
}

function reverse(n) {
	var reversed = n.toString().split('').reverse().join('');
	return typeof n == 'string' ? reversed : Number(reversed);
}

module.exports = {
	isPalindrome: isPalindrome,
	reverse: reverse
};