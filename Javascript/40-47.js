//1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

//3
// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

//6
if(haystack.includes(needle)); {
	console.log ("found")
}
if(haystack.indexOf(needle)); {
	console.log ("found")
}
if(haystack.lastIndexOf(needle)); {
	console.log ("found")
}
haystack[1] = needle ? console.log("found") : console.log("not found")
//7
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase()
console.log(allArrs); // fxy