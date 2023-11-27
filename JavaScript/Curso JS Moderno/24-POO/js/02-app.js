class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

const emanuel = new Cliente('Emanuel', 500);
console.log(emanuel.mostrarInformacion());
console.log(emanuel);
console.log(emanuel.bienvenida());

console.log( Cliente.bienvenida() );