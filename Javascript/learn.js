/*
  Loop Challenge
*/
let myAdmins = ["Ahmed", "Osama", "Sayed",  "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
counterOne = 1, counterTwo = 1, counterThree = 1;
let i = 0;
for (i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
   document.write(`<div>We Have  ${i} Admins</div>`);
     break;
     
    }
    document.write(`<hr>`);
    document.write(`<div>The Admine For Team ${i + 1} Is ${myAdmins[i]}</div>`);
    document.write(`<h2>Team Member :</h2>`);
    for (j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A")) {
            document.write(`<div>- ${counterOne++} ${myEmployees[j]}</div>`);
     
        }
              else  if (myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O")) {
            document.write(`<div>- ${counterTwo++} ${myEmployees[j]}</div>`);
     
        }
                    else  if (myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S")) {
            document.write(`<div>- ${counterThree++} ${myEmployees[j]}</div>`);
     
        }
    }
}

