// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa, 
      if (mesasDisponibles>0 && mesasSolicitadas <= mesasDisponibles) {
        resolve(`Hay ${mesasDisponibles} mesas disponibles. Tu reserva para ${mesasSolicitadas} personas ha sido confirmada.`);
      // de lo contrario, recházala con un mensaje adecuado.
    } else { reject(`Lo siento, no hay suficientes mesas disponibles para ${mesasSolicitadas} personas.`);}
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Simula un envío de correo. Usa Math.random()
      if (Math.random() > 0.2) {  // Simula un 80% de éxito en el envío
        resolve(`El correo de confirmación ha sido enviado a ${nombreCliente}.`);
      } 
      // para simular si el correo se envió correctamente o si ocurrió un error.
      else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}.`);
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    if (disponibilidad) {
      console.log(disponibilidad);  // Muestra el mensaje de disponibilidad
      const confirmacion = await enviarConfirmacionReserva(nombreCliente);  // Envía la confirmación
      console.log(confirmacion);  // Muestra el mensaje de confirmación
    } else {
      console.log("No hay mesas disponibles.");  // Si no hay mesas, muestra un mensaje
    }
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
} catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 6);  // Intenta hacer una reserva para 3 personas