/**
 * search.js
 * Lógica de búsqueda en tiempo real de tareas
 * Autor: Manuel Lazarte (Persona 4)
 */

// Query de búsqueda actual
let currentQuery = '';

/**
 * Filtra tareas que coincidan con el texto buscado
 * @param {Array} tasks - Lista de tareas
 * @param {string} query - Texto a buscar
 * @returns {Array} Tareas que coinciden
 */
export function searchTasks(tasks, query) {
  if (!query || query.trim() === '') return tasks;
  const normalized = query.trim().toLowerCase();
  return tasks.filter(task =>
    task.text.toLowerCase().includes(normalized)
  );
}

/**
 * Devuelve la query de búsqueda actual
 */
export function getCurrentQuery() {
  return currentQuery;
}

/**
 * Inicializa los listeners del buscador
 * @param {Function} onSearchChange - Callback que recibe la nueva query
 */
export function initSearch(onSearchChange) {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  if (!input) return;

  // Listener al escribir
  input.addEventListener('input', (e) => {
    currentQuery = e.target.value;

    // Mostrar/ocultar botón de limpiar
    if (clearBtn) {
      clearBtn.hidden = currentQuery.length === 0;
    }

    if (onSearchChange) onSearchChange(currentQuery);
  });

  // Listener para limpiar búsqueda
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      currentQuery = '';
      clearBtn.hidden = true;
      input.focus();
      if (onSearchChange) onSearchChange('');
    });
  }
}