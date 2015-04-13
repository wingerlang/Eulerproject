var math = require('../libs/math');

console.log('isPrime', 1, math.isPrime(1), false)
console.log('isPrime', 2, math.isPrime(2), true)
console.log('isPrime', 3, math.isPrime(3), true)
console.log('isPrime', 4, math.isPrime(4), false)
console.log('isPrime', 5, math.isPrime(5), true)
console.log('isPrime', 6, math.isPrime(6), false)

console.log('primeNumber', 1, math.primeNumber(1),2)
console.log('primeNumber', 2, math.primeNumber(2),3)
console.log('primeNumber', 3, math.primeNumber(3),5)
console.log('primeNumber', 4, math.primeNumber(4),6)
console.log('primeNumber', 5, math.primeNumber(5),11)
console.log('primeNumber', 6, math.primeNumber(6), 13)


describe('Math lib:', function() {

	console.log('in.math')

	jasmine.DEFAULT_UPDATE_INTERVAL = 0;

	iit('should add two numbers', function() {
		console.log('math.it');

		expect(true).toBe(false);
	});	

	it('should add two numbers', function() {
		console.log('here');
	});

});

