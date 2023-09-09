/*
Calcolo del prezzo del biglietto del treno.
===========================================

1. Creare due variabili con prompt, una dove chiede il numero di chilometri da percorrere, una dove chiede l'età dell'utente;

inserire all'interno delle variabili parsInt per assicurare un valore numerico.

creo due variabili che richiamano il percorso dei button 'Genera' e 'Annulla'


2. Creare una variabile con il prezzo al chilometro;

Creare due variabili con il valore dello sconto, uno per i minorenni, uno per gli over 65;


3. Applicare gli sconti in base all'età;



*/

// 1.

const firstNameRef = document.getElementById('firstname');
const travelRef = parseInt(document.getElementById("travel"));
const userAgeRef = document.getElementById("age");
const buttonGenRef = document.getElementById("btn-1");
const buttonResRef = document.getElementById("btn-2");

// const kmTravel = 100; //parseInt(prompt("Quanti chilometri desideri percorrere?"));
// const age = 20; //parseInt(prompt("Quanti anni hai?"));

let message;

// 2.

const price = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;
let ticket = travel * price;
let ticketDiscount = ticket;
// 3.

buttonGenRef.addEventListener("click", function () {
  const userAge = userAgeRef.value;
  if (userAge === 'min') {
    ticketDiscount *= 1 - discountUnderAge / 100;
    
  } else if (userAge === 'magg') {
    
  } else if (userAge === 'anz') {
    ticketDiscount *= 1 - discountOverAge / 100;
  }
});





// const kmTravel = 100; //parseInt(prompt("Quanti chilometri desideri percorrere?"));
// const age = 20; //parseInt(prompt("Quanti anni hai?"));

// let message;

// // 2.

// const price = 0.21;

// const discountUnderAge = 20;

// const discountOverAge = 40;

// let ticket = kmTravel * price;

// let ticketDiscount = ticket;
// // 3.

// if (age < 18) {
//   ticketDiscount *= 1 - discountUnderAge / 100;
//   console.log(ticketDiscount.toFixed(2));
// } else if (age >= 65) {
//   ticketDiscount *= 1 - discountOverAge / 100;
//   console.log(ticketDiscount.toFixed(2));
// } else {
//     console.log(ticketDiscount.toFixed(2));
// }

// console.log(firstname);
