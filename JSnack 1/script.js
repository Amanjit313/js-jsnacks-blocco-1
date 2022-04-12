/* 
  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let primonumero = prompt("Inserisci il primo numero fra 1 a 9");
console.log(primonumero);
if (primonumero >= 10){
  console.log(primonumero = "Ritenta! Questa volta non usare numeri sopra al 9!");
}

let secondonumero = prompt("Inserisci il secondo numero fra 1 a 9")
console.log(secondonumero);
if (secondonumero >= 10){
  console.log(secondonumero = "Ritenta! Questa volta non usare numeri sopra al 9!");
}

if (primonumero > secondonumero){
  document.getElementById("numeromaggiore").innerHTML = primonumero;
  console.log(primonumero);
} else {
  document.getElementById("numeromaggiore").innerHTML = secondonumero;
  console.log(secondonumero);
}