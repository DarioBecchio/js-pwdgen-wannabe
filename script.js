/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito,
genero la password
*/

//Creo un prompt che chiede il nome utente e la salvo in una const

const user_name = prompt ('What\'s your name?');
console.log(user_name);

//Creo un prompt che chiede il cognome utente e la salvo in una const
const user_surname = prompt ('What\'s your last name?');
console.log(user_surname);

//Creo un prompt che chiede il colore preferito utente e la salvo in una const
const fav_colour = prompt ('What\'s your favourite colour?');
console.log(fav_colour);

//Creazione password sommando le stringhe delle const precedenti
const password = user_name + user_surname + fav_colour + "23"
console.log(password);
document.getElementById('password').innerHTML = password ;