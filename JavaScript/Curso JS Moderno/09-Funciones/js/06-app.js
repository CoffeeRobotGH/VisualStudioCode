function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Emanuel', 'Paredes');
saludar('Emanuel');
saludar();