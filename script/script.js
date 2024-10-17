// Esercizio ==> Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
//stampa un messaggio appropriato sull’esito del controllo.

// creo un array che contiene le email di chi può accedere
const allowedEmail = ['filippo@gmail.com', 'marco@gmail.com','carlo@gmail.com','alberto@gmail.com','luca@gmail.com',]  // array

// creo una variabile, con un Prompt chiedo all'utente la sua email e lo salvo nella variabile
const userEmail = prompt('Inserisci la tua mail')
console.log(userEmail)   // string

// creo una variabile vuota che mi darà il messaggio nelle varie e successive casistiche
let message = ''

// SE allowedEmail include userEmail, message = può accedere
// ALTRIMENTI message = non può accedere
if (allowedEmail.includes(userEmail)) {
    message = 'Può effettuare l\'accesso!'
} else {
    message = 'Spiacenti, non può effetturare l\'accesso'
}

console.log(message)  // string




// Esercizio ==> Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
