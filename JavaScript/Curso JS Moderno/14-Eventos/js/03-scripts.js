const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', e => {
    if (e.target.value === '') {
        console.log('fallo la validación');
        return;
    } else {
        console.log('escribiendo...');
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.target.value);
    }
});