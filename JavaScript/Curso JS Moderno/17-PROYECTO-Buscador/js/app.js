// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objet con la busqueda
const datoBusqueda = {
    marca: '',
    minimo: '',
    maximo: '',
    year: '',
    puertas: '',
    transmision: '',
    color: '',
}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // muestra  los autos al cargar

    // Llena las opciones del año
    llenarSelect();
});

// Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datoBusqueda.marca = e.target.value;

    filtrarAuto();
});
year.addEventListener('change', e => {
    datoBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datoBusqueda.minimo = parseInt(e.target.value);

    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datoBusqueda.maximo = parseInt(e.target.value);

    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datoBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datoBusqueda.transmision = e.target.value;

    filtrarAuto();
});
color.addEventListener('change', e => {
    datoBusqueda.color = e.target.value;

    filtrarAuto();
});



// Funciones
function mostrarAutos(autos) {
    limpiarHTML(); // Elimina el HTM previo

    autos.forEach ( auto => {
        const { marca, modelo, year, puertas , transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio ${precio} - Color: ${color}
        `;


        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    } )

    // if (autos.length === 0) { 
    //     r = document.createElement('P');
    //     r.textContent = 'No hay registros que coincidan con tu busqueda';
    //     resultado.classList.add('alerta', 'error');
    //     resultado.appendChild(r);
    // }
}

// Limpiar en el HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select
function llenarSelect() {
    for ( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agrega las opciones de año al select
    }
}

// Función que filtra en base a la búsqueda
function filtrarAuto() {

    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear )
        .filter( filtrarMinimo ).filter( filtrarMaximo )
        .filter( filtrarPuerta ).filter( filtrarTransmision )
        .filter( filtrarColor );

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, Intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    if (datoBusqueda.marca) {
        return auto.marca === datoBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    if (datoBusqueda.year) {
        return auto.year === datoBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if (datoBusqueda.minimo) {
        return auto.precio >= datoBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    if (datoBusqueda.maximo) {
        return auto.precio <= datoBusqueda.maximo;
    }
    return auto;
}

function filtrarPuerta(auto) {
    if (datoBusqueda.puertas) {
        return auto.puertas === datoBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if (datoBusqueda.transmision) {
        return auto.transmision === datoBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    if (datoBusqueda.color) {
        return auto.color === datoBusqueda.color;
    }
    return auto;
}