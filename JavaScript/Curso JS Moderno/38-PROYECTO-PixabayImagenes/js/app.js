const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda === '') {
        console.log('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje) {
    const existeAlerta  = document.querySelector('bg-red-100');

    if (!existeAlerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center" );
        
            alerta.innerHTML = `
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">${mensaje}</span>
            `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes() {
    const termino = document.querySelector('#termino').value;

    const key = '42274006-84695a9b1c1bcf2ed0fe337ed';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            totalPaginas  = calcularPaginas(resultado.totalHits);
            mostrarImagenes(resultado.hits);
        })
}

function  mostrarImagenes(imagenes) {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    // Iterar sobre el arreglo de imagenes y construir el HTML
    imagenes.forEach( imagen => {
        const { likes, views, previewURL, largeImageURL } = imagen;

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white ">
                    <img class="w-full" src=${previewURL} alt={tags} />
                    <div class="p-4">
                        <p class="card-text font-bold">${likes} <span class="font-light"> Likes</span> </p>
                        <p class="card-text font-bold">${views} <span class="font-light"> Vistas</span> </p>

                        <a href=${largeImageURL} target="_blank" rel="noopener noreferrer"
                            class="bg-blue-800 block font-bold hover:bg-blue-500 mt-5 p-1 rounded text-center text-white uppercase w-full">
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    // Limpiar el paginadr previo
    while( paginacionDiv.firstChild ) {
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    // Generamos el HTML
    imprimirPaginacion();
}

// Crear el generador
function *crearPaginacion(total) {
    for( let i = 1; i <= total; i++ ) {
        yield i;
    }
}

function calcularPaginas(total) {
    return parseInt( Math.ceil( total / registrosPorPagina ) );
}

function imprimirPaginacion() {
    iterador = crearPaginacion(totalPaginas);

    while( true ) {
        const { value, done } = iterador.next();

        if(done) return;

        const boton = document.createElement('a');
        boton.href = "#";
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('pag', 'bg-yellow-400', 'hover:bg-yellow-600', 'px-4', 'py-1', 'mr-2', 'mb-4', 'font-bold', 'rounded');
        paginacionDiv.appendChild(boton);

        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        
        console.log(boton)
    }
}