const suma = (a,b,c) => a + b + c;

const parcial = a => (b,c) => suma(a,b,c);

const primerNumero = parcial(5);
const resultado = primerNumero(4,3);

console.log(resultado);


// console.log(suma(1,2,3));


const parcial2 = a => b => c => suma(a,b,c);

const numero1 = parcial2(5);
const numero2 = numero1(4);
const resultado2 = numero2(3);

console.log(resultado2);


const parcial3 = a => b => c => suma(a,b,c);

const resultadoParcial = parcial3(5)(4)(3)

console.log(resultadoParcial);