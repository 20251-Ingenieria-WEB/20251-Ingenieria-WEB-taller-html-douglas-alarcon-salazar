import { getCharacters } from './api';
import { createCard } from './card';
import { createPaginator } from "./paginator";

// Variables de estado global
let page = 1;
let totalPages = 42;
let term = ''; // término de búsqueda

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
  search(); // configura el buscador
  await showCharacters(page); // carga personajes iniciales
  showPaginator(page, totalPages); // renderiza el paginador
});

function search() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');

  // Escucha el submit del formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // evita que recargue la página
    term = input.value.trim(); // guarda el término de búsqueda
    page = 1; // resetea a la primera página en cada búsqueda

    await showCharacters(page, term); // recarga personajes filtrados
    showPaginator(page, totalPages); // actualiza paginador (en caso cambien las páginas)
  });
}

function showPaginator(currentPage, totalPages) {
  // Limpia el contenedor del paginador
  document.getElementById('paginator-wrapper').innerHTML = '';

  const paginator = createPaginator({ currentPage, totalPages });

  //  Manejo del evento personalizado emitido por el paginador
  paginator.addEventListener('page-change', async (event) => {
    page = event.detail.page; // actualiza la página actual
    await showCharacters(page, term); // recarga los personajes
    
  });

  document.getElementById('paginator-wrapper').appendChild(paginator);
}

async function showCharacters(page, name = "") {
  const container = document.getElementById('cards-container');

  //  Llama a la API con página y término (si hay)
  let data = await getCharacters(page, name);

  // Actualiza el total de páginas (puede cambiar con búsqueda)
  totalPages = data.info.pages;

  // Limpia el contenedor antes de renderizar
  container.innerHTML = '';

  // Renderiza cada tarjeta
  data.results.forEach(character => {
    const card = createCard(character);
    container.appendChild(card);
  });
}
