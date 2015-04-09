var start = new Date().getTime();

function range(n) {
    return Array.apply(null, {length: n}).map(Number.call, Number);
}

function divisibleBy(a, b) {
	return a % b === 0;
}
function divisibleByAll(l, a) {
	return l.every(function(e) {
		return divisibleBy(a, e);
	});
}

function isPalindrome(s) {
	return s.toString() === s.toString().split("").reverse().join("");
}

function answer(s) {
	console.log('ANSWER:', s, new Date().getTime() - start, 'ms');
}

function reverse(n) {
	var reversed = n.toString().split('').reverse().join('');
	return typeof n == 'string' ? reversed : Number(reversed);
}

function isEven(x) {
	return x % 2 === 0;
}
function add(a, b) {
	return a + b;
}

module.exports = {
	range: range,
	divisibleBy: divisibleBy,
	isPalindrome: isPalindrome,
	answer: answer,
	isEven: isEven,
	add: add,
	divisibleByAll: divisibleByAll,
	reverse: reverse
};