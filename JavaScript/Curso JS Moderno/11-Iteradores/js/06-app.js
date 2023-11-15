// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudia JS'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
} )

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500}
]


carrito.forEach( producto => console.log( producto.nombre ) ) 


carrito.map( producto => console.log( producto.nombre ) ) 