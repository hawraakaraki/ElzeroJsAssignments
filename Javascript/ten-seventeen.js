// Assignments For Lessons 10 To 17
// First Assignments

//  declare a variables
var numberOne = 10,
    numberTwo = 20;
 // Normal Concatenate => 1020 
console.log(numberOne + "" + numberTwo);
// Normal Concatenate => String
console.log(typeof (numberOne + "" + numberTwo));
// Template Literals Way => 1020
console.log(`${numberOne}${numberTwo}`);
// Template Literals Way => String
console.log(typeof `${numberOne}${numberTwo}`);
/*
  Normal Concatenate
  20
  10
*/
console.log(numberTwo + "\n" + numberOne);
/*
  Template Literals Way
  20
  10
*/
console.log(`${numberTwo}
${numberOne}`);
// Secound Assignments
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// Third Assignments
/* `I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""`` */
console.log("`I'm In \\\\ \n Love \\\\ \"\"\" '\'\'\ \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"Javascript\"\"\'\'");
// fourth Assignments
let a = 21;
let b = 20;
let c = b + "" + a;
let d = c + "_"+ c;
console.log(`_${a}_${c}_${d}_${b}_`); // _21_2021_2021_2021_20_