    document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      const emailValidacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const telefonoValidacion = /^\d{10}$/; // Teléfono de 10 dígitos

      // Validación de nombre
      if (nombre.length < 2) {
        alert('El nombre debe tener al menos 2 caracteres.');
        return;
      }

     // Validación de correo
     if (!emailValidacion.test(correo)) {
       alert('Por favor, ingresa un correo electrónico válido.');
       return;
     } 

     // Validación de teléfono
     if (!telefonoValidacion.test(telefono)) {
       alert('Por favor, ingresa un número de teléfono válido de 10 dígitos.');
       return;
     }

     // Validación de intereses
    if (intereses.length === 0) {
      alert('Selecciona al menos un interés.');
      return;
    }

    // Validación de horario
    if (!horario) {
      alert('Selecciona un horario.');
      return;
    }

      
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });