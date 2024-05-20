
//creo l'input utente

let inputUtente = parseFloat(Number(prompt('Inserisci un numero da 1 a 5 scegliendo tra pari e dispari')));

// definisco la variabile constante massima del limite del numero random generato
const max = 5

//creo la variabile per cui il numero randomico di partenza è zero che poi...
let numeroRandomico = 0


//apertura funzione
function numeroRandom (numeroRandomico){
   
   //una volta inserito nella funziona varia tra un massimo di 0 e 5
   
    numeroRandomico = Math.floor(Math.random() *(max + 1));

  //creo le condizioni di vincita e perdita e di non valdità
    if(inputUtente > 5){
        console.log('Il numero che hai inserito non è valido, riprova.')
    } 
    else if ([inputUtente + numeroRandomico] % 2 === 0 ){
        console.log ('La Somma tra il tuo numero:', inputUtente, 'e il numero randomico:', numeroRandomico, 'è pari, hai vinto')
    }
    else if([inputUtente + numeroRandomico] % 2 !== 0){
        console.log ('La Somma tra il tuo numero:', inputUtente, 'e il numero randomico:', numeroRandomico, 'è dispari, hai perso')
    }

//tramite retunr mi faccio ''restiuire'' in console il valore randomico    
    return numeroRandomico


} //chiusura funzione

//richiamo la funzione
numeroRandom(numeroRandomico)


