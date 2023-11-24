localStorage.setItem('nombre', 'Emanuel');
localStorage.setItem('nombre', 1);

sessionStorage.setItem('nombre', 'Paredes');
sessionStorage.setItem('nombre', 2);

const producto = {
    nombre: "Monitor 24 Pulgadas",
    preci: 300
}

const productoString = JSON.stringify( producto );
console.log(productoString);
localStorage.setItem('producto', productoString);


const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify( meses ));