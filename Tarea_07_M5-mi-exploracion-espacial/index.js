const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas
planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`Distancia a la Tierra: ${planeta.distanciaALaTierra} años luz`);
  console.log(`Imagen: ${planeta.imagen}`); 
  console.log('---');
});