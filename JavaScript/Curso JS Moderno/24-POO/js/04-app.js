class Cliente {
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }

    /*
        setNombre(nombre) {
            this.#nombre = nombre;
        }
        getNombre() {
            return this.#nombre;
        }
    */
}

const emanuel = new Cliente('Emanuel', 300);
console.log(emanuel);
console.log(emanuel.mostrarInformacion());
// console.log(emanuel.#nombre);
/*
    const emanuel = new Cliente();
    juan.setNombre('Emanuel');
    console.log( emanuel.getNombre() );

    // console.log(emanuel.#nombre);
*/