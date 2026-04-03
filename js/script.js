'use strict';

// Recupero degli elementi del DOM
const nameInput = document.querySelector("#name");
const kmInput = document.querySelector("#km");
const ageInput = document.querySelector("#age");

const generateBtn = document.querySelector("#generate-btn");
const resetBtn = document.querySelector("#reset-btn");

const ticketSection = document.querySelector("#ticket-section");

const passengerNameElement = document.querySelector("#passenger-name");
const offerTypeElement = document.querySelector("#offer-type");
const carriageNumberElement = document.querySelector("#carriage-number");
const finalPriceElement = document.querySelector("#final-price");

// Evento click sul bottone "Genera"
generateBtn.addEventListener("click", function () {
    // Recupero dei valori inseriti dall'utente
    const passengerName = nameInput.value.trim();
    const km = parseFloat(kmInput.value);
    const age = parseInt(ageInput.value);

    // Validazione dei dati inseriti
    if (passengerName === "" || isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
        alert("Inserisci tutti i dati correttamente.");
        return;
    }

  // Calcolo del prezzo base: 0.21€ per ogni km
  const basePrice = km * 0.21;

    // Variabili per prezzo finale e tipo di offerta
    let finalPrice = basePrice;
    let offerType = "Biglietto Standard";

    // Applicazione sconto per minorenni
    if (age < 18) {
        finalPrice = basePrice * 0.8;
        offerType = "Sconto Minorenne";
    }
    // Applicazione sconto per over 65
    else if (age >= 65) {
        finalPrice = basePrice * 0.6;
        offerType = "Sconto Over 65";
    }

  // Generazione casuale del numero carrozza da 1 a 10
  const carriageNumber = Math.floor(Math.random() * 10) + 1;

    // Stampa dei risultati nella card del biglietto
    passengerNameElement.innerText = passengerName;
    offerTypeElement.innerText = offerType;
    carriageNumberElement.innerText = carriageNumber;
    finalPriceElement.innerText = `${finalPrice.toFixed(2)} €`;

    // Mostro la sezione del biglietto rimuovendo la classe Bootstrap d-none
    ticketSection.classList.remove("d-none");
});

// Evento click sul bottone "Annulla"
resetBtn.addEventListener("click", function () {
  // Svuoto i campi del form
    nameInput.value = "";
    kmInput.value = "";
    ageInput.value = "";

    // Resetto i valori stampati nel biglietto
    passengerNameElement.innerText = "-";
    offerTypeElement.innerText = "-";
    carriageNumberElement.innerText = "-";
    finalPriceElement.innerText = "-";

    // Nascondo di nuovo la sezione del biglietto
    ticketSection.classList.add("d-none");
});