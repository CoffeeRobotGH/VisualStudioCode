function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Platinum';
    } else if (this.saldo > 5000) {
        tipo = 'Gold';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function()  {
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
}

Cliente.prototype.retiraSaldo = function(retira)  {
    this.saldo -= retira;
}


// Insatanciarlo
const pedro = new Cliente('Pedro', 6000);

console.log( pedro.tipoCliente() );
console.log ( pedro.nombreClienteSaldo() );
pedro.retiraSaldo(2000);
console.log ( pedro.nombreClienteSaldo() );

console.log(pedro);



// function Empresa( nombre, saldo, categoria) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// }

// const CCJ = new Empresa('Codigo con Juan', 4000, 'Curso en Línea');

// console.log(CCJ);
