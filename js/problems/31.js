/*

Coin sums
Problem 31
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?

*/

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(target, coins) {
	var result// = numberOfCoins(target, coins);

	euler.answer(result);

}(12, /*[200, 100, 50, 20, 10, 5, 2, 1]*/ [5, 2, 1]));


function numberOfCoins(target, coins) {
	var part = 0,
	currentCoin = 0;
	var solutions = [];

	var currentSolution = {
		5: 0,
		2: 0,
		1: 0
	};
	var coinNr = 0;
	
	// Set startingPOS
	while(target > 0) {
		var currentCoin = coins[coinNr];
		currentSolution[currentCoin] = Math.floor(target / currentCoin);
		target -= currentCoin * currentSolution[currentCoin]
		coinNr++;
	}

	console.log('Starting position:', currentSolution);

	// When all ones are used, the last solution is found
	while (currentSolution[2] === target) {
	}

	console.log('Num solutions', numSolutionsFound);
}

function replaceLowerWithNextToLowest(solution, coins) {
	var curr = coins[coins.length-1];

	console.log('Current Coin:', curr);
	if(solution[curr] > 0) {
		var currentCoin = coins[coinNr]
		var numerOfCoinsInLowerValue = Math.floor(coins[curr] / coins[curr] - 1);
		var rest = coins[curr] - numerOfCoinsInLowerValue * coins[curr-1]; 
		solution[curr-1] += numerOfCoinsInLowerValue;
	}
	// 1. curr[next to lowest]
	// 2. curr > 0, decrease by one
	// 3. curr-1 = as many as 
}

// 0 2or, öka ""

console.log(replaceLowerWithNextToLowest({'1':0,'2':0,'5':2}, [5,2,1]), {'1':1,'2':2,'5':1});
//console.log(replaceLowerWithNextToLowest({'1':1,'2':2,'5':1}, [5,2,1]), {'1':3,'2':1,'5':1});
// console.log(replaceLowerWithNextToLowest({'1':3,'2':1,'5':1}, [5,2,1]), {'1':5,'2':0,'5':1});
// console.log(replaceLowerWithNextToLowest({'1':5,'2':0,'5':1}, [5,2,1]), {'1':6,'2':2,'5':0});
// console.log(replaceLowerWithNextToLowest({'1':6,'2':2,'5':0}, [5,2,1]), {'1':8,'2':1,'5':0});
// console.log(replaceLowerWithNextToLowest({'1':8,'2':1,'5':0}, [5,2,1]), {'1':10,'2':0,'5':0});
// console.log(replaceLowerWithNextToLowest({'1':10,'2':0,'5':0}, [5,2,1]), null);