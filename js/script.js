'use strict';

const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const button = document.getElementById("calcola");

button.addEventListener("click", function () {
    const km = parseFloat(kmInput.value);
    const eta = parseInt(etaInput.value);

    const prezzoBase = km * 0.21;
    let prezzoFinale = prezzoBase;

    if (eta < 18) {
        prezzoFinale = prezzoBase * 0.8;
    } else if (eta > 65) {
        prezzoFinale = prezzoBase * 0.6;
    }

    console.log("Chilometri:", km);
    console.log("Età:", eta);
    console.log("Prezzo finale:", prezzoFinale.toFixed(2) + "€");
});