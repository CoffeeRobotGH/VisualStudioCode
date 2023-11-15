const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudia JS'];


for (let pendiente in pendientes) {
    console.log(pendiente);
}


let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    year: '1969'
}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil) ) {
    console.log(valor);
    console.log(llave);
}