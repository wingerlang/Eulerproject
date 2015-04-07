/*
	A palindromic number reads the same both ways. 
	The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
	Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(s) {
	return s.toString() === s.toString().split("").reverse().join("");
}

(function solve() {
	var largest = 0,
		intermediate;

	for(var i = 1000; i > 0; i--) {
		for(var j = 1000; j > 0; j--) {
			intermediate = i*j;
			if (isPalindrome(intermediate) && intermediate > largest) {
				largest = intermediate;
			}
		}
	}

	console.log('Result', largest);
}());