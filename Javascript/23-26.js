// Assignments 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
// Your Solutions
console.log(1e5); // 100000
console.log(2e4 + 2e4 + 6e4); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(100000.0); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(Math.trunc(100000.68)); // 100000
console.log(Math.min(200000 , 100000)); // 100000
console.log(Math.max(200, 100000)); // 100000
// Assignments 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// Assignments 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
// Assignments 4
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
// Assignments 5
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
// Assignments 6
let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed()); // 10
// Assignments 7
console.log(Math.ceil(Math.random() *4)); // 0 || 1 || 2 || 3 || 4