/*
	containing over five-thousand first names, begin by sorting it into alphabetical order. 
	Then working out the alphabetical value for each name, 
	multiply this value by its alphabetical position in the list to obtain a name score.

	For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
	So, COLIN would obtain a score of 938 × 53 = 49714.

	What is the total of all the name scores in the file?
*/

var fs = require('fs'),
	math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(fname, opt) {
	var result = readFile(fname, opt);
	euler.answer(result);
}('22_names.txt', {encoding:'utf8'}));

function readFile(fname, opt) {
	return sumNames(fs.readFileSync(fname, opt).split(',').sort());
}
function sumNames(names) {
	return names.map(function(name, i) {
		return getNameScore(name) * (i+1);
	}).reduce(math.add);
}

function getNameScore(name) {
	return name.toLowerCase().split('').map(function(letter) {
		return 1 + "abcdefghijklmnopqrstuvwxyz".indexOf(letter);
	}).reduce(math.add);
}