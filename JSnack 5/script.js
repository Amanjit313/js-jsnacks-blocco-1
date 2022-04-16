/* 
  Crea un array vuoto.
  Chiedi per 6 volte all’utente di inserire un numero,
  se è dispari inseriscilo nell’array
  */

let numeri = [];

let contatore = 0;
while (contatore < 6){
  let number = parseInt (prompt("Inserisci il primo numero"))
  if (number % 2 == 0){
    console.log("è pari" , number);
  } else {
    console.log("è dispari" , number);
    numeri.push(number);
  }
  contatore++;
}

console.log(numeri);
document.getElementById("numeritext").innerHTML = numeri + ("dispari");




