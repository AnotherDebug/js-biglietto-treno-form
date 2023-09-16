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
const toggleTicketRef = document.getElementById("toggleTicket");

//intervalli numerici per randomizer
const minCarriage = 1;
const maxCarriage = 5;
const minCodeCp = 1;
const maxCodeCp = 100000;

// 2.
// dichiarazione dei valori costanti
const tariff = 0.21;
const discountUnderAge = 20;
const discountOverAge = 40;

// dichiarazione variabile message
let message;

// 3.
// evento onclick del pulsante Genera
buttonGenRef.addEventListener("click", generator);

// evento onclick del pulsante Annulla
buttonResRef.addEventListener("click", reset);








/*************************************************
    FUNCTIONS
 *************************************************/

function generator() {
  const userAge = userAgeRef.value;
  console.log(userAge);
  const distance = parseFloat(distanceRef.value.replace(",", "."));
  console.log(distance);
  console.log(typeof userAge);
  if (userAge !== "" && distance !== isNaN) {
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
    const carriage = randomizer(minCarriage, maxCarriage);
    carriageRef.innerHTML = carriage;
    const cpCode = randomizer(minCodeCp, maxCodeCp);

    cpCodeRef.innerHTML = cpCode.toString().padStart(6, "0");
    ticketPriceRef.innerHTML = ticketPrice.toFixed(2).toString() + " €";

    toggleTicketRef.classList.remove("d-none");
  }
}

function reset() {
  firstNameRef.value = "";
  distanceRef.value = "";
  userAgeRef.value = "";

  toggleTicketRef.classList.add("d-none");
};

/**
 *
 * @param {number} min
 * @param {number} max
 */
function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};