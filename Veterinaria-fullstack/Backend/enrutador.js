const recursos = require("./recursos");
const mascotas = require("./Rutas/mascotas");
const veterinarias = require("./Rutas/veterinarias");
const duenos = require("./Rutas/duenos");
const consultas = require("./Rutas/consultas");

module.exports = {
  ruta: (data, callback) => {
    callback(200, { mensaje: "esta es /Ruta" });
  },
  mascotas: mascotas(recursos.mascotas),
  veterinarias: veterinarias(recursos.veterinarias),
  duenos: duenos(recursos.duenos),
  consultas: consultas(recursos.consultas),
  noEncontrado: (data, callback) => {
    callback(404, { mensaje: "no encontrado" });
  },
};