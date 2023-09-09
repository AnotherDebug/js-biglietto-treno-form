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
const passengerRef = document.getElementById("passenger");
const offerRef = document.getElementById("offer");
const carriageRef = document.getElementById("carriage");
const cpCodeRef = document.getElementById("cpCode");
const ticketPriceRef = document.getElementById("ticketPrice");
const minCarriage = 1;
const maxCarriage = 5;
const minCodeCp = 1;
const maxCodeCp = 100000;

// const kmTravel = 100; //parseInt(prompt("Quanti chilometri desideri percorrere?"));
// const age = 20; //parseInt(prompt("Quanti anni hai?"));

// 2.
// dichiarazione dei valori costanti
const tariff = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;
let message;

// 3.
// evento onclick del pulsante Genera
buttonGenRef.addEventListener("click", function () {
  const userAge = userAgeRef.value;
  const distance = parseFloat(distanceRef.value.replace(",", "."));

  if (userAge !== "" && distance !== NaN) {
    let ticketPrice = distance * tariff;
    if (userAge === "min") {
      ticketPrice *= 1 - discountUnderAge / 100;
      message = "Biglietto scontato al 20%";
    } else if (userAge === "anz") {
      ticketPrice *= 1 - discountOverAge / 100;
      message = "Biglietto scontato al 40%";
    } else {
      message = "Biglietto standard";
    }
    passengerRef.innerHTML = firstNameRef.value;
    offerRef.innerHTML = message;
    const carriage = Math.floor(
      Math.random() * (maxCarriage - minCarriage + 1) + minCarriage
    );
    carriageRef.innerHTML = carriage;
    const cpCode = Math.floor(
      Math.random() * (maxCodeCp - minCodeCp + 1) + minCodeCp
    );
    cpCodeRef.innerHTML = cpCode.toString().padStart(6, "0");
    ticketPriceRef.innerHTML = ticketPrice.toFixed(2).toString() + " €";
  }
});



// evento onclick del pulsante Annulla
buttonResRef.addEventListener('click', function(){
  passengerRef.innerHTML = firstNameRef.value;
});
