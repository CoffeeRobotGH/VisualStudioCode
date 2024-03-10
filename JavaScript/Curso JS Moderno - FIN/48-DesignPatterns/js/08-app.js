function Vendedor(nombre) {
	this.nombre = nombre;
	this.sala = null;
}

Vendedor.prototype = {
	oferta: (articulo, precio) => {
		console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
	},
	
	vendido: comprado => {
	console.log(`Vendido a ${comprador}`)
	}
}

function Comprador(nombre) {
	this.nombre = nombre;
	this.sala = null;
}

Comprador.prototype = {
	oferta: (cantidad, comprador) => {
		console.log(`${comprador.nombre} : ${cantidad}`);
	}
}

function Subasta() {
	let compradores = {};
	
	return {
		registrar: usuario => {
			compradores[usuario.nombre] = usuario;
			usuario.sala = this;
		}
	}
}


// Crear objetos
const emanuel = new Comprador('Emanuel');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);


vendedor.oferta ('Mustang66', 300);

emanuel.oferta(350, emanuel);
pablo.oferta(450, pablo);
emanuel.oferta(500, emanuel);
pablo.oferta(700, pablo);

vendedor.vendido('Pablo');