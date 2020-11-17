// js di dice_game

// nome utente
var userName = prompt("Salve, qual è il suo nome?");
console.log(userName);


// random dice number generator
var playerDice = Math.floor(Math.random() * 5) + 1;
var compputerDice = Math.floor(Math.random() * 5) + 1;
console.log(playerDice, compputerDice);

// winner_verifier
if (playerDice > compputerDice) {
  document.getElementById('dice_game').innerHTML = "Ottimo " + userName + ", hai vinto";
} else if (playerDice < compputerDice) {
  document.getElementById('dice_game').innerHTML = "Spiacente " + userName + ", hai perso";
} else {
  document.getElementById('dice_game').innerHTML = "Paregio";
}