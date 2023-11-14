iniciaroApp();

function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Emanuel')
}


function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticadp exitosamente: ${usuario}`);
}