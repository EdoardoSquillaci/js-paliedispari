let array = [];
let inputUtente = prompt('Inserisci una parola, se palindroma sei inteliggente.');

//creo una funziona per dividere la parola

function parolaInversa (parola){
return parola.split('').reverse('').join('')
}


//creo una funzione per capire se la parola è palindroma


function parolaPalindroma(parola){
    return parola === parolaInversa(parola)
}


//creo le condizioni per cui la parola se la parola è palindroma si avrano risultati differenti
if (parolaPalindroma(inputUtente)){
 array.push(inputUtente);
 console.log('La Parola che hai inserito è palindroma')
}else{
    console.log('La parola che hai inserito non è palindroma')
}

parolaPalindroma(inputUtente)