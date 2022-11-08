// Play With Variables Values
//challange 1
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  Examples:
  [++a]
  - Value: 11
  - Explain: pre increments, it increased the number then print
  [+]
  - Explain: Addition Operator
*/
/*
  Examples:
  [+b++]
  - Value: 20
  - Explain: the + before b is for return to number if its not a number , 
    and post increments, it print the number then increase 
  [+]
  - Explain: Addition Operator
*/
/*
  Examples:
  [+c++]
  - Value: 80
  - Explain: the + before c is for return to number if its not a number , 
    and post increments, it print the number then increase 
  [-]
  - Explain: Subtraction Operator

*/
/*
  Examples:
  [+a++]
  - Value: 11
  - Explain: the + before a is for return to number if its not a number , 
    and post increments, it print the number then increase 
  so, the total value = 11 + 20 + 80 - 11 = 100
*/
// a = 12 ,  b = 21  ,  c = 81
console.log(++a + -b + +c++ - -a++ + +a);
/*
  Examples:
  [++a]
  - Value: 13
  - Explain: pre increments, it increased the number then print
  [+]
  - Explain: Addition Operator
*/
/*
  Examples:
  [-b]
  - Value: -21
  - Explain: we put - before b
  [+]
  - Explain: Addition Operator
*/
/*
  Examples:
  [+c++]
  - Value: 81
  - Explain: the + before a is for return to number if its not a number , 
    and post increments, it print the number then increase 
  [-]
  - Explain: Subtractions Operator
*/
/*
  Examples:
  [-a++]
  - Value: -13
  - Explain: the - before a is for put the number in negative, 
    and post increments, it print the number then increase 
  [+]
  - Explain: Addition Operator
*/
/*
  Examples:
  [+a]
  - Value: 14
  - Explain:  a is 14 and - with - = +
    so, the total value = 13 -21 + 81 - -13 + 14 = 100
*/
//  a = 14  ,  b = 21  ,   c = 82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  Examples:
  [--c]
  - Value: 81
  - Explain: pre decrement 
  [+]
  - Explain: Addition Operator
*/
/*
  Examples:
  [+b]
  - Value: 21
  - Explain:  a is 14 
  [+]
  - Explain: Addition Operator
*/

/* [--a]
        Value = 13
        Explain : pre decrement decress the value by 1 to be 13
    [*] 
    - Explain: multiplication operator 
*/
/*
    [+b++]
        Value = 21
   Explain: the + before a is for return to number if its not a number , 
    and post increments, it print the number then increase 
    [-] 
    - Explain: subtraction operator
*/
/*
    [+b]
        Value = 22
        Expalin = Unary plus operator has no effect effect
    
    [*] 
    - Explain: multiplaction operator
*/
/*   [a]
        Value = 13
        Explain = from the previous a
    
    [+] 
    - Explain: Addition operator
*/
/*
  [--a]
        Value = 12
        Explain = Pre-decrement decress the value by 1 to be 12
    
    [-] = subtraction operator
*/
/*
    [+true]
        Value = 1
        Expalin = unary plus opertor change the date type from boolean to be number

        so, the total value = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
*/
// challnge 2
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(+d * +(-e)); // 2000
console.log(++g * ++e + ++f + -d) // 173
