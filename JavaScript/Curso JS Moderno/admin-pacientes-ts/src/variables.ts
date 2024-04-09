import { generarId } from "./funciones.ts";
import type { Cita } from "./types";

let editando = {
    value: false
}

// Objeto de Cita
const citaObj : Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}