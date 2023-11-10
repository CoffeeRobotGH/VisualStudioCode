const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const nombre1 = producto.nombre
console.log(nombre1);

// Destructuring
const { nombre2 } = producto;
const { precio2 } = producto;
console.log(nombre2);
console.log(precio2);

const { nombre3, precio3, disponible3, noExiste } = producto;
console.log(nombre3);
console.log(precio3);
console.log(disponible3);
console.log(noExiste);

console.log(producto);