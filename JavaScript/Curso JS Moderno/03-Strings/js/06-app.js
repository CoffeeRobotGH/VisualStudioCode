const producto = 'Monitor 20 Pulgadas';

// .repeater te va a permitir repetir una cadena de texto...

const texto = ' en Pomocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`)

// Split, dividir un string

const actividad = "Estoy aprendiendo JS Moderno"
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS #JSModerno";
console.log(tweet.split("#"));