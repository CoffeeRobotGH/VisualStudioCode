import nuevaFuncion, { nombreCliente, ahorro as A, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from "./empresa.js";
// import Vue from 'vue';
// import React from 'react';

nuevaFuncion();

console.log(nombreCliente);
console.log(A);
console.log(mostrarInformacion(nombreCliente, A));

tieneSaldo(A);


const cliente = new Cliente( nombreCliente, A );

console.log(cliente.mostrarInformacion());


// Importar empresa
const empresa = new Empresa('Codigo con Juan', 100, 'Aprendizaje en Línea');

console.log(empresa.mostrarInformacion());