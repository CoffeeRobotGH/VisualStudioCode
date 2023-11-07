module.exports = {
    mascotas: [
      { tipo: "Perro", nombre: "Trosky0", dueno: "Camilo" },
      { tipo: "Perro", nombre: "Trosky1", dueno: "Camilo" },
      { tipo: "Perro", nombre: "Trosky2", dueno: "Camilo" },
      { tipo: "Perro", nombre: "Trosky3", dueno: "Camilo" },
      { tipo: "Perro", nombre: "Trosky4", dueno: "Camilo" },
    ],
    veterinarias: [
      { nombre: "Nayru", apellido: "Naydra", pais: "Chile", identificacion: "1234567891" },
      { nombre: "Farore", apellido: "Farodra", pais: "Perú", identificacion: "1234567892" },
      { nombre: "Eldin", apellido: "Eldra", pais: "Bolivia", identificacion: "1234567893" },
      { nombre: "Impa", apellido: "Sheika", pais: "Colombia", identificacion: "12348765" },
    ],
    duenos: [
      { documento: "1234567891", nombre: "Nayru", apellido: "Naydra" },
      { documento: "1234567892", nombre: "Farore", apellido: "Farodra" },
      { documento: "1234567893", nombre: "Eldin", apellido: "Eldra" },
      { documento: "1234876590", nombre: "Impa", apellido: "Sheika" },
    ],
    consultas: [
      {
        mascota: 0,
        veterinaria: 0,
        fechaCreacion: new Date(),
        fechaEdicion: new Date(),
        historia: "",
        diagnostico: "",
      },
    ],
  };