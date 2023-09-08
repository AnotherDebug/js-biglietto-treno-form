/*
Calcolo del prezzo del biglietto del treno.
===========================================

1. Creare due variabili con prompt, una dove chiede il numero di chilometri da percorrere, una dove chiede l'età dell'utente;

inserire all'interno delle variabili parsInt per assicurare un valore numerico.


2. Creare una variabile con il prezzo al chilometro;

Creare due variabili con il valore dello sconto, uno per i minorenni, uno per gli over 65;


3. Applicare gli sconti in base all'età;



*/

// 1.

const kmTravel = 100 //parseInt(prompt("Quanti chilometri desideri percorrere?"));

const age = 25 //parseInt(prompt("Quanti anni hai?"));

let message;

// 2.

const price = 0.21;

const discountUnderAge = 20;

const discountOverAge = 40;

let ticket = kmTravel * price;

let ticketDiscount = ticket;

// 3.

if (age < 18) {
  ticketDiscount *= 1 - discountUnderAge / 100;
  console.log(ticketDiscount);

} else if (age >= 65) {
  ticketDiscount *= 1 - discountOverAge / 100;
  console.log(ticketDiscount);
} 