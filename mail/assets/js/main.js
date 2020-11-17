// js di mail_checker

// userMail
var userMail = prompt("Salve, qual è la tua Email?");
console.log(userMail);

// emailCheckList
var emaliCheckList = ["esercizio@boolean.it", "esercizio@boolean.com", "esercizio@boolean.net"]

// verificatore di accesso
if (userMail == emaliCheckList[0]) {

  document.getElementById('mail_checker').innerHTML = "access guarantee";

} else if (userMail == emaliCheckList[1]) {

  document.getElementById('mail_checker').innerHTML = "access guarantee";

} else if (userMail == emaliCheckList[2]) {

  document.getElementById('mail_checker').innerHTML = "access guarantee";

} else {
  document.getElementById('mail_checker').innerHTML = "access denied. Per poter accedere devi avere una mail @boolean.";
}