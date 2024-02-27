console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise((resolve) => {
    resolve('Desconocido...');
}).then(console.log);

console.log('Ultimo');


function hola() {
    console.log('Hola')
}
hola();