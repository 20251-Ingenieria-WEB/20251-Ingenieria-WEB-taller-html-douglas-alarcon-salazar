export function createPaginator({ currentPage = 1, totalPages = 1 }) {
  let current = currentPage;

  // Contenedor principal del paginador
  const wrapper = document.createElement('div');
  wrapper.classList.add('paginator');

  // Crear los botones y asignar clase común
  const btnFirst = document.createElement('button');
  btnFirst.className = 'btn-paginator';
  btnFirst.textContent = '<<'; // Ir a la primera página

  const btnPrev = document.createElement('button');
  btnPrev.className = 'btn-paginator';
  btnPrev.textContent = '<'; // Ir a la página anterior

  const pageText = document.createElement('span');
  pageText.className = 'current-page'; // Texto que muestra la página actual

  const btnNext = document.createElement('button');
  btnNext.className = 'btn-paginator';
  btnNext.textContent = '>'; // Ir a la página siguiente

  const btnLast = document.createElement('button');
  btnLast.className = 'btn-paginator';
  btnLast.textContent = '>>'; // Ir a la última página

  // Actualiza el estado visual del paginador (número actual y desactivar botones si es necesario)
  const updateView = () => {
    pageText.textContent = `Página ${current} de ${totalPages}`;
    btnFirst.disabled = current === 1;
    btnPrev.disabled = current === 1;
    btnNext.disabled = current === totalPages;
    btnLast.disabled = current === totalPages;
  };

  // Emite un evento personalizado para avisar que cambió la página
  const emitChange = () => {
    const event = new CustomEvent('page-change', {
      detail: { page: current }, // Envia la página actual como detalle
    });
    wrapper.dispatchEvent(event);
  };

  // Lógica para cambiar de página con validaciones
  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === current) return; // No hacer nada si está fuera de rango o ya está en esa página
    current = newPage;
    updateView();   // Actualiza botones y texto
    emitChange();   // Notifica al exterior que hubo cambio de página
  };

  // Asignación de eventos a los botones
  btnFirst.addEventListener('click', () => goToPage(1));
  btnPrev.addEventListener('click', () => goToPage(current - 1));
  btnNext.addEventListener('click', () => goToPage(current + 1));
  btnLast.addEventListener('click', () => goToPage(totalPages));

  // Agrega los elementos al contenedor
  wrapper.appendChild(btnFirst);
  wrapper.appendChild(btnPrev);
  wrapper.appendChild(pageText);
  wrapper.appendChild(btnNext);
  wrapper.appendChild(btnLast);

  updateView(); // Mostrar estado inicial

  return wrapper; // Devuelve el componente listo para usar
}
