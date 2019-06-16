//Input Array
var array = [10, 8, 12, 36];
console.log("Initial arrray is: " +array);

//Double the values in array using "map" function
var double = array.map(function(val){return val * 2;});
console.log("Array after doubling the values: " +double);

//Filter array values >20 using "filter" function
var filter = double.filter(function(fval){return fval > 20});
console.log("Filtered array with value with >20 : " +filter);

//Find sum of the values in the filtered array using "reduce" function
var sum = filter.reduce(function(a, b){return a+b});
console.log("Sum of values in the filterd array is: " +sum);