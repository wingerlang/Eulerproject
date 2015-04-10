/*

Dice Game
Problem 205
Peter has nine four-sided (pyramidal) dice, each with faces numbered 1, 2, 3, 4.
Colin has six six-sided (cubic) dice, each with faces numbered 1, 2, 3, 4, 5, 6.

Peter and Colin roll their dice and compare totals: the highest total wins. The result is a draw if the totals are equal.

What is the probability that Pyramidal Pete beats Cubic Colin? Give your answer rounded to seven decimal places in the form 0.abcdefg

*/


var utils = require('./utils');

(function solve(times) {
	var result = loop(times);

	utils.answer(result);

}(100000000));

function loop(times) {
	var pyramidalWins = 0;
	for(var i = 0; i < times; i++) {
		if(pyramidal() > cubic()) {
			pyramidalWins++;
		}
	}
	var cubicWins = times - pyramidalWins;
	var pyramidalWinRate = (pyramidalWins / times).toFixed(7);

	console.log('Pyramidal', pyramidalWins, 'Cubic', cubicWins, pyramidalWinRate );
}
function pyramidal() {
	return randomNumbers(0, 4, 9).reduce(utils.add);
}
function cubic() {
	return randomNumbers(0, 6, 6).reduce(utils.add);
}

function randomNumbers(low, high, number) {
	var randoms = [];

	for(var i = 0; i < number; i++) randoms.push(random(low, high));
	return randoms;
}

function random(low, high) {
	return low + Math.ceil(Math.random() * high);
}

console.log(pyramidal(), pyramidal(), pyramidal(), pyramidal())
console.log(cubic(), cubic(), cubic(), cubic())