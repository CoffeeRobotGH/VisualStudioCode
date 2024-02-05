const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) )
}

function mostrarHTML() {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}