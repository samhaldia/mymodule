////There is an exports object available in scope, which is used to export functions from a module.


exports.add = add;
exports.multiply = multiply;
exports.factorial = factorial;
exports.now = Date.now();



function add (number1, number2) {
return parseInt(number1, 10) + parseInt(number2, 10);
}
function multiply (number1, number2) {
return parseInt(number1, 10) * parseInt(number2, 10);
}
function factorial (number) {
if (number === 0) {
return 1;
}
else {
return number * factorial(number - 1);
}
}

