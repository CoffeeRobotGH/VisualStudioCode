const meses = ['Enero', 'Febrero', 'Marzo'];

meses[3] = 'Abril';

// Agregar al final del arreglo
meses.push('Mayo');
meses.push('Junio');

console.table(meses);


const carrito = [];

// Definir producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

// .push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// .unshift agrega al inicio de un arreglo
carrito.unshift(producto3);

console.table(carrito);