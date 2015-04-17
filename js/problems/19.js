/*

Counting Sundays
Problem 19
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/


var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(start, stop) {
	var result = countSundays(start, stop);

	euler.answer(result);

}(new Date('1901-01-01'), new Date('2000-12-31')));

function isSundayFirst(d) {
	//console.log(d, d.getDate(), d.getDay())
	return d.getDate() === 1
		&& d.getDay() === 0;
}
function countSundays(start, stop) {
	var numberOfSundays = 0;

	while (start < stop) {
		start.setDate(start.getDate() + 1);
		
		if(isSundayFirst(start)) {
			numberOfSundays++;
		}
	}
	return numberOfSundays;
}