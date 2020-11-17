// js di mail_checker

// userMail
var userMail = prompt("Salve, qual è la tua Email?");
console.log(userMail);

// emailCheckListArray
var emaliCheckListArray = ["esercizio@boolean.it", "esercizio@boolean.com", "esercizio@boolean.net"];

var booleanEmailCheck = 0;

// emailCheckList

for (var i = 0; i < emaliCheckListArray.length; i++) {

  console.log(emaliCheckListArray[i]);

  if (userMail == emaliCheckListArray[i]) {

    booleanEmailCheck++;

  }

};


if (booleanEmailCheck > 0) {

  document.getElementById('mail_checker').innerHTML = "access guarantee";

} else {

  document.getElementById('mail_checker').innerHTML = "access denied. Per poter accedere devi avere una mail @boolean.it/.com/.net.";
};