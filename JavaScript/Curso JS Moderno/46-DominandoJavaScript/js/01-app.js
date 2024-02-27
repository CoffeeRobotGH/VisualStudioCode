const cliente = 'Emanuel';

function mostrarCliente() {
    const cliente = 'Pedro';

    console.log(cliente);

    const cliente2 = 'Juan';
}

console.log(cliente2);

mostrarCliente();


// Scope por bloque
const login = true;

function clienteLogueado() {

    const cliente = "Juan";
    console.log(cliente);

    if(login) {
        const cliente = 'Admin';
        console.log(cliente);
    }

}
clienteLogueado();