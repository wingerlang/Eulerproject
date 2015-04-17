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
	var result = path(width, height);

	euler.answer(result);

}(20, 20));


function path(y, x) {
    var cache = {}
    
    function cached(y, x) {
        var k = y + '-' + x;
    
        if (x === 0 && y === 0) { return 1; }
        if (x === -1 || y === -1) return 0;
        if(cache[k]) return cache[k]; 

        cache[k] = cached(y - 1, x) + cached(y, x - 1);
        return cache[k];
    };
    return cached(y, x);
}