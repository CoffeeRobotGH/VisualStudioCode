const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


console.log(encabezado.innerText); // si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); // se trae el HTML


const encabezado2 = document.querySelector('.contenido-hero h1').innerText;

document.querySelector('.contenido-hero h1').innerText = 'Nuevo Heading';

nuevoHeading = 'Nuevo heading'
document.querySelector('.contenido-hero h1').innerText = nuevoHeading;


const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';