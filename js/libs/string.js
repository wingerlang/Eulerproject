'use strict';

function isPalindrome_slow(s) {
	return s === s.split("").reverse().join("");
}

function isPalindrome_optimized(s) {
    var start = 0, stop = s.length-1;
        
    while(start < stop) {
        if(s[start++] !== s[stop--]) {
            return false;
        }
    }
    return true;
}

function isPermutation(a, b) {
	a = a.toString().split('');
	b = b.toString().split('');

	return a.length === b.length 
		&& a.every(function(char) {
			return b.indexOf(char) > -1;
		});
}


function isPalindromeNumber(n) {
	return isPalindrome_optimized(n.toString());
}

function reverse(n) {
	if (typeof n === 'function')
		return n.reverse()

	var reversed = n.toString().split('').reverse().join('');
	return typeof n == 'string' ? reversed : Number(reversed);
}

module.exports = {
	isPalindrome: isPalindrome_optimized,
	isPalindromeNumber: isPalindromeNumber,
	reverse: reverse,

	isPermutation: isPermutation
};