self.onload = () => {
    console.log('Ventana Lista');
}

window.nombre = 'Monitor 20 Pulgadas';

const producto = {
    
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return `El Producto: ${self.nombre} tiene un precio de ${self.precio}`
    }
}

console.log(producto.mostrarInfo());