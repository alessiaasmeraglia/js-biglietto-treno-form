# Biglietto del Treno

Mini progetto front-end per il calcolo del **prezzo di un biglietto del treno**, realizzato con **HTML**, **CSS**, **JavaScript** e **Bootstrap**.

## Descrizione

L’utente inserisce i dati richiesti nel form e il programma calcola il **prezzo finale del biglietto** in base ai chilometri da percorrere e all’età del passeggero.

Il prezzo base del biglietto è determinato da questa regola:

- **0.21 € per ogni km**

Sulla base dell’età vengono applicati i seguenti sconti:

- **20% di sconto** per i minorenni
- **40% di sconto** per gli over 65

Il risultato finale viene mostrato direttamente in pagina, con il prezzo formattato a due decimali.

## Funzionalità

- inserimento di **nome del passeggero**
- inserimento dei **km da percorrere**
- inserimento dell’**età**
- calcolo automatico del **prezzo base**
- applicazione dello **sconto corretto**
- generazione di dati aggiuntivi del biglietto, come:
  - tipo di offerta
  - numero carrozza casuale
- visualizzazione del biglietto finale in pagina
- reset completo del form tramite pulsante **Annulla**
- interfaccia responsive migliorata con **Bootstrap**

## Tecnologie utilizzate

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5**

## Struttura del progetto

```bash
js-biglietto-treno-form/
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Logica del progetto

La logica del calcolo è basata su:

```js
prezzoBase = km * 0.21
```

Successivamente viene applicato uno sconto in base all’età:

- se l’età è inferiore a 18 anni → sconto del 20%
- se l’età è pari o superiore a 65 anni → sconto del 40%
- altrimenti → prezzo standard

Il prezzo finale viene poi mostrato con:

```js
finalPrice.toFixed(2)
```

per avere sempre due cifre decimali.

## Funzioni principali

Nel file JavaScript possono essere presenti funzioni come:

- `calculateTicket()` → calcola prezzo finale e tipo di offerta
- `generateRandomNumber()` → genera il numero casuale della carrozza
- `resetTicket()` → ripristina il form e nasconde il biglietto

## Come usare il progetto

1. Apri `index.html` nel browser
2. Inserisci:
   - nome e cognome
   - chilometri da percorrere
   - età del passeggero
3. Premi il pulsante **Genera**
4. Visualizza il biglietto con il prezzo finale
5. Premi **Annulla** per svuotare i campi e ripartire

## Obiettivo dell’esercizio

L’obiettivo del progetto è esercitarsi con:

- gestione degli **input utente**
- uso degli **event listener**
- manipolazione del **DOM**
- utilizzo di **condizioni if / else**
- formattazione dei numeri con `toFixed(2)`
- organizzazione del codice in modo più leggibile
- miglioramento dell’interfaccia con **Bootstrap**

## Possibili miglioramenti futuri

- validazione più avanzata dei campi
- messaggi di errore mostrati in pagina al posto di `alert()`
- aggiunta del **codice biglietto**
- scelta della tipologia di viaggio
- gestione di più tratte o più passeggeri
- miglioramento grafico del layout

## Autore

Progetto realizzato come esercitazione di front-end.
