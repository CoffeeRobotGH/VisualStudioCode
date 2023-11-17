const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//con arrow function
btnFlotante.addEventListener('click', () => {
    if ( footer.classList.contains('activo') ) {
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo')
        btnFlotante.textContent('Idioma y Moneda')

        console.log('Ocultaste el footer')
    } else {
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
        btnFlotante.textContent('X  Cerrar')

        console.log('Mostrar el footer')
    }
});

// con function
btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if ( footer.classList.contains('activo') ) {
        footer.classList.remove('activo')
        this.classList.remove('activo')
        this.textContent('Idioma y Moneda')

        console.log('Ocultaste el footer')
    } else {
        footer.classList.add('activo')
        this.classList.add('activo')
        this.textContent('X  Cerrar')

        console.log('Mostrar el footer')
    }
}

