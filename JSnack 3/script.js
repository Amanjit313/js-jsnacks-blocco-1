/* 
  Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
  Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/
let somma = 0;

let contatore = 0;
while (contatore < 5){
  let number = parseInt (prompt("Inserisci il primo numero"))
  somma = somma + number;
  contatore++;
}

console.log(somma);
document.getElementById("somma-numeri").innerHTML = somma;

