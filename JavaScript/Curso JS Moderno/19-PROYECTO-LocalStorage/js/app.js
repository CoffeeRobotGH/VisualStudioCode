// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') || [] );

        crearHTML();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usiario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validación...
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio')

        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet // "texto: tweet" si el key es igual al value se puede escribir una unica ves
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una ves agregado se crea el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}


// mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');;
    contenido.appendChild(mensajeError);

    // Elimina el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}


// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.querySelector('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li')

            // añadir el texto
            li.innerText = tweet.tweet;

            // asignar el botón
            li.appendChild(btnEliminar);

            // insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}


// Agrega los tweets a LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Eliminar un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}


// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}