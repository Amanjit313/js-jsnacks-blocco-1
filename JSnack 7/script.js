/* 
  Stampa le potenze di 2 fino a 1000.
  questo snack cela un trabocchetto:  1000 non è una potenza di 2
  perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
  perché altrimenti il controllo viene fatto dopo e si sfora
*/
let number = 10;
let due = 0;

let contatore = 0;
while (contatore < number) {
  document.getElementById("due").innerHTML += due + "<br>";
  contatore++;
  due = Math.pow(2, contatore);
  console.log(due);
}
