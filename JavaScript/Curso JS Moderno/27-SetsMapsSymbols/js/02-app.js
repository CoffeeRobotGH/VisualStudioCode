// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'emanuel',
    saldo: 200
}

// const nombre = 'Emanuel';

weakset.add(cliente);
// weakset.add(nombre);

console.log(weakset.has(cliente));

// weakset.delete(cliente);

console.log(cliente.size);


console.log(weakset);