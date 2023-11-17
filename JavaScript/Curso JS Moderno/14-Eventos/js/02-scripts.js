const nac = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');

    nav.style.backgroundColor = 'transparent';
});
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'white';
});

nav.addEventListener('click', () => {
    console.log('click en el nav');
});

// mousedown - similar al click
// click
// dblclick = doble click
// mouseup - cuando sueltas el click