export function createCard(character) {
  // Crear un elemento <article> que será la tarjeta del personaje
  const card = document.createElement('article');
  card.className = 'card'; // Clase para estilos

  // Usamos innerHTML para insertar directamente la estructura de la tarjeta
  card.innerHTML = `
    <div class="image-container">
      <!-- Imagen del personaje -->
      <img src="${character.image}" alt="${character.name}">
    </div>

    <div class="content-container">
      <!-- Sección con nombre, estado y especie -->
      <div class="section">
        <h2 class="text-white">${character.name}</h2>
        <span class="status">
          <span class="status__icon"></span> <!-- Icono que cambia de color según el estado -->
          ${character.status} - ${character.species}
        </span>
      </div>

      <!-- Sección con la última ubicación conocida -->
      <div class="section">
        <span class="text-gray">Last known location:</span>
        <span class="text-white">${character.location.name}</span>
      </div>
    </div>
  `;

  // Obtener el icono de estado después de renderizar el HTML
  const statusIcon = card.querySelector('.status__icon');

  // Agregar clase al icono según el estado del personaje
  if (character.status === 'Alive') {
    statusIcon.classList.add('status--alive'); // Verde
  } else if (character.status === 'Dead') {
    statusIcon.classList.add('status--dead'); // Rojo
  } else {
    statusIcon.classList.add('status--unknown'); // Gris
  }

  // Devolver la tarjeta ya construida
  return card;
}
