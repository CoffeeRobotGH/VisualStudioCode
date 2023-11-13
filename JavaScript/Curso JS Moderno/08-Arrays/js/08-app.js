const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring
const { nombre, precio, disponible, noExiste } = producto;

console.log(nombre);


// Destructuring con Arreglos
const numeros = [10,20,30,40,50];

const [ primero, , tercero, ...cuarto ] = numeros;

console.log(tercero);
console.log(primero);
console.log(cuarto);