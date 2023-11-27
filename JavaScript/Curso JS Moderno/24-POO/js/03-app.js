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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super( nombre, saldo );
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`
    }
}

const emanuel = new Cliente('Emanuel', 500);
const empresa = new Empresa('Código con juan', 600, 98123456, 'Aprendizaje en Línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());