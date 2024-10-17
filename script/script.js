// Esercizio ==> Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
//stampa un messaggio appropriato sull’esito del controllo.


// // Versione 1
// // creo un array che contiene le email di chi può accedere
// const allowedEmail = ['filippo@gmail.com', 'marco@gmail.com','carlo@gmail.com','alberto@gmail.com','luca@gmail.com',]  // array

// // creo una variabile, con un Prompt chiedo all'utente la sua email e lo salvo nella variabile
// const userEmail = prompt('Inserisci la tua mail')
// console.log(userEmail)   // string

// // creo una variabile vuota che mi darà il messaggio nelle varie e successive casistiche
// let message = ''

// // SE allowedEmail include userEmail, message = può accedere
// // ALTRIMENTI message = non può accedere
// if (allowedEmail.includes(userEmail)) {
//     message = 'Può effettuare l\'accesso!'
// } else {
//     message = 'Spiacenti, non può effetturare l\'accesso'
// }

// // Stampa del messaggio
// console.log(message)  // string

// // Versione 2
// // Variabile con lista delle email autorizzate
// const emailList = ['filippo@gmail.com', 'marco@gmail.com','carlo@gmail.com','alberto@gmail.com','luca@gmail.com',]  // array

// // Chiedo all'utente di inserire la sua email
// let userEmail = prompt('Inserisci la tua email');

// // Variabile per tenere traccia dell'accesso
// let allowedAccess = false // Boolean

// // Ciclo for per controllare se l'email dell'utente è nella lista delle email autorizzate
// for (let i = 0; i < emailList.length; i++) {    // se 0 è più piccolo della lunghezza dell'array (true) esegue il ciclo
//     if (userEmail === emailList[i]) {           // SE la userMail è esattamente uguale a una della mail di qualsiasi indice dell'array
//         console.log('Può effettuare l\'accesso!')
//         allowedAccess = true;  // Boolean    messo a true per fargli trovare una possibile corrispondenza
//     }
// }
// // SE dopo il ciclo allowedAcces è ancora false, nessuna corrispondenza è stata trovata, stampa il messaggio di accesso negato
// if (!allowedAccess) {
//     console.log('Spiacenti, non può effettuare l\'accesso')
// }


// // Esercizio ==> Gioco dei dadi
// // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.

// // creo una variabile che generi numeri random da 1 a 6 per il giocatore
// let userNum = Math.floor(Math.random() *6) + 1  // numeri da 0 a 5, con + 1 ==> da 1 a 6
// console.log('Numero dell\'utente:', userNum)  // number

// // creo una variabile che generi numeri random da 1 a 6 per il computer
// let computerNum = Math.floor(Math.random() *6) + 1  // numeri da 0 a 5, con + 1 ==> da 1 a 6
// console.log('Numero del computer:', computerNum)  // number


// // SE il numero più alto è del giocatore, il giocatore ha vinto
// // ALTRIMENTI SE il numero più alto è del computer, vince il computer
// // ALTRIMENTI è un pareggio (i numeri sono uguali)

// // Variabile per stabilire il vincitore
// let winner = '';

// // Stabilire il vincitore
// if (userNum > computerNum) {
//     winner = 'Il giocatore è il vincitore!'
// } else if (computerNum > userNum) {
//     winner = 'Il computer è il vincitore!'
// } else {
//     winner = 'È un pareggio!'
// }

// // Mostra il risultato
// console.log(winner)  // string