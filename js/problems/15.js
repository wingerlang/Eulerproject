/*
15. Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?

http://www.mozartreina.com/counting-lattice-paths.html
*/ 

var math = require('../libs/math'),
	string = require('../libs/string'),
	euler = require('../libs/euler');

(function solve() {
	var result;

	euler.answer(result);

}());


var gridSize = [2,2]
 

function path(gridSize) {
	console.log(gridSize);
   // base case, no moves left
    if (gridSize == [0,0]) return 1
    
    //# move left when possible
    if(gridSize[0] > 0)
        times += path([gridSize[0]-1, gridSize[1]])
    
    //# move down when possible
    if (gridSize[1] > 0)
        times += path([gridSize[0], gridSize[1]-1])

    return times;
}

console.log(path(gridSize))