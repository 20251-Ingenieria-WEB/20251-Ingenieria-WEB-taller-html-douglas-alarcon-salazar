Rick and Morty Characters App
=============================

Una aplicación web que consume la Rick and Morty API (https://rickandmortyapi.com/) para mostrar personajes en tarjetas con paginación. Está desarrollada en JavaScript moderno (ES Modules) con componentes desacoplados y arquitectura organizada.

Características
---------------

- Búsqueda por nombre de personaje.
- Paginación completamente modular.
- Tarjetas individuales para cada personaje.
- Consumo de API con manejo de estado.
- Arquitectura desacoplada (el paginador emite eventos, la lógica vive fuera).

Cómo usar
---------

1. Clonar el repositorio:

   git clone https://github.com/tu-usuario/rick-and-morty-app.git
   cd rick-and-morty-app

2. Instalar dependencias y correr con Vite (si se usa bundler):

   npm install
   npm run dev

   También se puede usar sin Vite: simplemente abrir `index.html` en el navegador usando un servidor local (por ejemplo, Live Server en VSCode).

Componentes clave
-----------------

createCard(character)
Genera una tarjeta HTML con la información de un personaje.

createPaginator({ currentPage, totalPages })
Devuelve un nodo DOM que emite el evento `page-change` con `{ page: X }` cuando el usuario navega.
No contiene lógica de negocio. La escucha del evento debe hacerse desde afuera.

getCharacters(page, name)
Consulta la API y devuelve los resultados para la página y término de búsqueda indicados.

Tecnologías
-----------

- HTML5
- JavaScript ES Modules
- Rick and Morty API
- Vite (opcional, como bundler)

Licencia
--------

MIT

Créditos
--------

Hecho con 💚 por Douglas Alarcón Salazar – usando la increíble Rick and Morty API.
