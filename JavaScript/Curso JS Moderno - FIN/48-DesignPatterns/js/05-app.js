// Module Pattern

// const mostrarCliente = nombre => {
	// console.log(nombre);
// }
// export default mostrarCliente;

const modulo1 = (function() {
	const nombre = 'Emanuel';
	
	fucntion hola() {
		console.log('hola');
	}
	
	return {
		nombre,
		hola
	}
})();

// En otro archivo
console.log(modulo1.nombre);

modulo.hola();