/* 
  Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/
let cubo = 0;
let number = parseInt (prompt("Inserisci il primo numero"));

let contatore = 0;
while (contatore < number){
  contatore++;
  cubo = Math.pow(contatore, 3);
  console.log(cubo);
  document.getElementById("cubo").innerHTML += cubo + "<br>";
}

