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
// dichiarazione dei riferimenti
const firstNameRef = document.getElementById("firstName");
const distanceRef = document.getElementById("distance");
const userAgeRef = document.getElementById("userAge");
const buttonGenRef = document.getElementById("btn-1");
const buttonResRef = document.getElementById("btn-2");
const passengerRef = document.getElementById('passenger');
const offerRef = document.getElementById('offer');
const carriageRef = document.getElementById('carriage');
const cpCodeRef = document.getElementById('cpCode');
const ticketPriceRef = document.getElementById("ticketPrice");
// const kmTravel = 100; //parseInt(prompt("Quanti chilometri desideri percorrere?"));
// const age = 20; //parseInt(prompt("Quanti anni hai?"));


// 2.
// dichiarazione dei valori costanti
const tariff = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;
let message;

// 3.
// evento onclick del pulsante genera
buttonGenRef.addEventListener("click", function () {
  const userAge = userAgeRef.value;
  const distance = parseFloat(distanceRef.value.replace(",", "."));

  if (userAge !== "" && distance !== NaN) {
    let ticketPrice = distance * tariff;
    if (userAge === "min") {
      ticketPrice *= 1 - discountUnderAge / 100;
      message = 'Biglietto scontato al 20%';
    } else if (userAge === "anz") {
      ticketPrice *= 1 - discountOverAge / 100;
      message = 'Biglietto scontato al 40%';
    }else{
      message = 'Biglietto standard';
    }
    offerRef.innerHTML = message;
    passengerRef.innerHTML = firstNameRef.value;
    ticketPriceRef.innerHTML = ticketPrice.toFixed(2).toString() + " €";

  }
});


