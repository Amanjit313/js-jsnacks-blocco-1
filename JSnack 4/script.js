/* 
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

   PASSAGGI
   - Inserire un array con la lista partecipanti
   - Chiedere il nome dell'utente con un prompt, se è presente nella lista   partecipanti ha accesso alla lista, in caso contrario no
*/

const nomeUtente = prompt("Qual'è il tuo nome?");

const partecipanti = ["Nicola", "Fabio", "Giuseppe", "Franco", "Marco"]

let partecipantiConsentiti = false;

for (let i = 0; i < partecipanti.length; i++){

  if (partecipanti[i] === nomeUtente){
    partecipantiConsentiti = true;
  }

}

if (partecipantiConsentiti == true){
  document.getElementById("invitati").innerText = "Puoi entrare!"
} 

if (partecipantiConsentiti == false){
  document.getElementById("invitati").innerText = "Non puoi entrare!"
}

