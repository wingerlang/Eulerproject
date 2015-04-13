'use strict';
var start = new Date().getTime();

function answer(a) {
	console.log('ANSWER:', a, new Date().getTime() - start + 'ms');
}

module.exports = {
	answer: answer
};