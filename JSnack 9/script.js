/* 
  Calcola la somma e la media dei primi 10 numeri.
*/

let somma = 0;
let media = 0;

for (let i = 1; i <= 10; i++){
  console.log(i);
  somma = somma + i;
  console.log(somma);
  document.getElementById("somma").innerHTML = somma;
}

media = somma / 10;
document.getElementById("media").innerHTML = media;

