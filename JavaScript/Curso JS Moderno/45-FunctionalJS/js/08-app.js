// const cliente = 'Emanuel';

// function mostrarCliente() {
//     const cliente = 'Paredes';

//     console.log(cliente);
// }

// console.log(cliente);

// mostrarCliente();

const obtenerCliente = () => {
    const nombre = "Emanuel";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();