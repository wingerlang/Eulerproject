/*
15. Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?

http://www.mozartreina.com/counting-lattice-paths.html
*/ 

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve(width, height) {
	var result = path(width, height, 0);

	euler.answer(result);

}(width, height));

function path(y, x, times) {
    if (y === 0 && x === 0) 
        return times + 1;
    
    if (y > 0) 
        times = path(y - 1, x, times);
    
    if (x > 0) 
        times = path(y, x - 1, times);
    return times;
}