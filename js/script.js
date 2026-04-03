'use strict';

const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const button = document.getElementById("calcola");
const resultElement = document.getElementById("result");

button.addEventListener("click", function () {
    const km = parseFloat(kmInput.value);
    const eta = parseInt(etaInput.value);

    if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
        resultElement.innerHTML = `<p>Inserisci dei valori validi.</p>`;
        return;
    }

    const prezzoBase = km * 0.21;
    let prezzoFinale = prezzoBase;
    let sconto = "Nessuno";

    if (eta < 18) {
        prezzoFinale = prezzoBase * 0.8;
        sconto = "20% (minorenne)";
    } else if (eta > 65) {
        prezzoFinale = prezzoBase * 0.6;
        sconto = "40% (over 65)";
    }

    resultElement.innerHTML = `
        <p>Chilometri: ${km}</p>
        <p>Età: ${eta}</p>
        <p>Prezzo finale: ${prezzoFinale.toFixed(2)}€</p>
        <p>Sconto applicato: ${sconto}</p>
    `});