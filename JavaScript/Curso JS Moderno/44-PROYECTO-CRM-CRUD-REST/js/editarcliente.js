import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {
    // Campos del ormulario
    const idInput = document.querySelector('#id');
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded', async () => {
        // Verificar si el cliente existe
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        // Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

    });

    function mostrarCliente(cliente) {
        const { id, nombre, empresa, email, telefono } = cliente;

        idInput.value = id;
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
    }


    async function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            id: idInput.value,
            nombre: nombreInput.value, 
            email: emailInput.value, 
            telefono: telefonoInput.value,
            empresa: empresaInput.value
        }
        if( validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        await editarCliente(cliente);
        window.location.href = 'index.html';
    }


    function validar(obj) {
        return !Object.values(obj).every(input => input !== '') ;
    }
})();