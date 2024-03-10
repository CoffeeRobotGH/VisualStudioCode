// Sigleton

let instancia = null;

class Persona {
	constructor(nombre, email) {
		if(!instancia) {
			this.nombre = nombre;
			this.email = email;
			instancia = this;
		} else {
			return instancia;
		}
	}
}

const persona = Persona('Emanuel', 'correo@correo.com');
console.log(persona);

const persona2 = Persona('Karen', 'karen@karen.com');
console.log(persona2);