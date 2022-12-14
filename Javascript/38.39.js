// Assignments 1
let day = "   Friday  ";

switch (
  `${day.trim().substr(0, 1).toUpperCase()}${day
    .trim()
    .substr(1, 9)
    .toLowerCase()}`
) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Avaliable");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
// from the ps of elzero if challange
let a = 1;
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log(10, 40) : a > 40 ? console.log("a > 40") : console.log("no");