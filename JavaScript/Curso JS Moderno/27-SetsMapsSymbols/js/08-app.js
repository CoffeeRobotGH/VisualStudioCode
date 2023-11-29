const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Emanuel');
datos.set('profesion', 'Estudiante');

// Default
for (let ciudades of ciudades) {
    console.log(ciudades);
}

for (let ordenes of ordenes) {
    console.log(ordenes);
}

for (let datos of datos) {
    console.log(datos);
}


// Keys Iterator
for (let keys of ciudades.keys()) {
    console.log(keys);
}

for (let keys of ordenes.keys()) {
    console.log(keys);
}

for (let keys of datos.keys()) {
    console.log(keys);
}


// Values Iterator
for (let value of ciudades.values()) {
    console.log(value);
}

for (let value of ordenes.values()) {
    console.log(value);
}

for (let value of datos.values()) {
    console.log(value);
}


// Entries Iterator
for (let entry of ciudades.entries()) {
    console.log(entry);
}

for (let entry of ordenes.entries()) {
    console.log(entry);
}

for (let entry of datos.entries()) {
    console.log(entry);
}