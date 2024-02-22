function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes....');
        setTimeout( () => {
            resolve('Los clientes fueron descargados');           
        }, 5000);

    });
}

function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos....');
        setTimeout( () => {
            resolve('Los pedidos fueron descargados');           
        }, 3000);
    });
}

// Async await
// const app = async () => {
//     try {
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);

//         const pedidos = await descargarNuevosPedidos();
//         console.log(pedidos);
//     } catch (error) {
//         console.log(error)
//     }
// }


// La solución, Promise.all();
const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos() ])
        console.log(respuesta);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error)
    }
}


app();