// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${this.el1} y ${this.el2}`);
}

const informacion = {
    nombre: 'Emanuel',
}

const musicaFavorita = ['J-Pop', 'Rock']

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();