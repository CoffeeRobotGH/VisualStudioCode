// Mixins Pattern

class Persona {
	constructor(nombre, email) {
		this.nombre = nombre;
		this.email = email;
	}
}

class Cliente {
	constructor(nombre, email) {
		this.nombre = nombre;
		this.email = email;
	}
}

const funcionesPersona = {
	mostrarInformacion() {
		console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`)
	},
	mostrarNombre() {
		console.log(`Mi nombre es ${this.nombre}`)
	}
}

const cliente = new Persona('Emanuel', 'correo@correo.com');

// Añadir funcionesPersonas a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


const cliente = new Persona('Juan', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Persona('Emanuel', correo2@correo2.com);

console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();