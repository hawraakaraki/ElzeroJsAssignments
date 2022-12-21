//1
// let start = 10;
// let end = 100;
// let exclude = 40;
// let i ;
// for(i = start ; i < end ; i += start) { 
// 	if(i == exclude ) {
// 		continue;
// 	}
// 	console.log(i);
// }

console.log("-".repeat(50));
//2
let startone = 10;
let endone = 0;
let stop = 3;
let j ;
for(j = startone ; j > endone ; j--) {
	if(j <= 9 ) {
		console.log(`0${j}`);
	}
else{
	console.log(`${j}`);
}
if(j == stop) {
	break;
}
}
console.log("-".repeat(50));
//3
let startTwo = 1;
let endTwo = 6;
let breaker = 2;
for(h = startTwo ; h <= endTwo ;h++) {
	console.log(`    ${h}`);
	for(k = breaker ; k < endTwo ;k += 2) {
		console.log(`- - ${k}`)		
	}
}
console.log("-".repeat(50));
//4
let index = 10;
let jump = 2;
let endThree = 0;
let b = index ;
for (;;) {
 if( b > endThree) {
 	console.log(b);
 }
 b -= 2
 if(b == jump){
 	break;
 }
}
console.log("-".repeat(50));
//5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"  ];
let letter = "a" , v;
for(v = letter.length - letter.length ; v < friends.length ; v++){
    if(friends[v].startsWith(letter.toUpperCase())){
   continue;
    }
console.log(` ${v } => ${friends[v]}`);
}
console.log("-".repeat(50));
//6
 start = 0;
let swappedName = "lZerO";

 result = "";
for (let i = start; i < swappedName.length; i++){

     swappedName[i]==swappedName[i].toUpperCase() ? result += swappedName[i].toLowerCase() : result+= swappedName[i].toUpperCase()
   	 
}
console.log(result);
console.log("-".repeat(50));
//7
let startFive = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(s = startFive + true ; s < mix.length ; s++){
typeof mix[s] === typeof "string"?"": console.log(mix[s])
  
}
