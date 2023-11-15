const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!usuario){
    console.log('Inicia sesión o crea una cuenta');
} else if (!puedePagar){
    console.log('Fondos insuficientes');
} else {
    console.log('No, no puedes comprar');
}