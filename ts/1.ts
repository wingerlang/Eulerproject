/*

 If we list all the natural numbers below 10 that are multiples of
 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.
 */

(function(upper = 1000) {
    var nums = [];

    var isMultipleOf = (a, b) => a % b;
    var isMultipleOf3Or5 = (n) => isMultipleOf(n, 3) || isMultipleOf(n, 5);
    var add = (a, b) => a + b;

    for(let i = 0; i < upper; i++) {
        nums.push(i);
    }

    nums = nums.filter(isMultipleOf3Or5);
    var result = nums.reduce(add);

    console.log(result)
}());