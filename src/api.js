export async function getCharacters( page, name='') {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;

    if (name) {
      url += `&name=${encodeURIComponent(name)}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener personajes:', error);
      return {results: [], info:{pages: 0}};
    }
  }
  