// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true },
        { "titulo": "Los pilares de la tierra", "autor": "Ken Follett", "genero": "Novela historica", "disponible": false }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        console.log("Leyendo datos...");
        const datosComoTexto = JSON.stringify(biblioteca); // Simula el contenido de un archivo JSON (texto)
        const datosLeidos = JSON.parse(datosComoTexto);   // Simula la lectura del archivo y conversión a objeto
        callback(datosLeidos); // Devuelve el objeto reconstruido
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    console.log("Agregando libro...");
    setTimeout(() => {
        // Pista: deberías agregar el nuevo libro a `biblioteca.libros`
        biblioteca.libros.push(nuevoLibro);
        console.log("Libro agregado correctamente:");
        console.log(nuevoLibro);
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);

        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`Disponibilidad actualizada para "${titulo}": ahora está ${nuevoEstado ? 'disponible' : 'no disponible'}.`);
        } else {
            console.log(`Libro con título "${titulo}" no encontrado.`);
        }
    }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);
