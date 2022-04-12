/* 
  L’utente inserisce due parole in successione, con due prompt.
  Il software stampa prima la parola più corta, poi la parola più lunga.

 PASSAGGI
  - Usare due prompt con possilità di inserire parole
  - Stampare prima la parola più corta poi la più lunga
*/

let primaparola = prompt("Inserisci la prima parola");

let secondaparola = prompt("Inserisci la seconda parola");

if (primaparola.length > secondaparola.length){
  document.getElementById("parola").innerHTML = secondaparola + primaparola;
} else {
  document.getElementById("parola").innerHTML = primaparola + secondaparola;
}
