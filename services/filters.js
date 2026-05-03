/**
 * filters.js
 * Lógica de filtrado de tareas (todas / pendientes / completadas)
 * Autor: Manuel Lazarte (Persona 4)
 */

// Estado del filtro activo
let currentFilter = 'all';

/**
 * Filtra tareas según el estado solicitado
 * @param {Array} tasks - Lista de tareas
 * @param {string} status - 'all' | 'pending' | 'completed'
 * @returns {Array} Tareas filtradas
 */
export function filterTasks(tasks, status) {
  if (status === 'all') return tasks;
  if (status === 'pending') return tasks.filter(task => !task.completed);
  if (status === 'completed') return tasks.filter(task => task.completed);
  return tasks;
}

/**
 * Devuelve el filtro activo actualmente
 */
export function getCurrentFilter() {
  return currentFilter;
}

/**
 * Inicializa los listeners de los botones de filtro
 * @param {Function} onFilterChange - Callback que recibe el nuevo filtro
 */
export function initFilters(onFilterChange) {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Quitar clase active de todos
      buttons.forEach(b => b.classList.remove('active'));
      // Agregar al clickeado
      btn.classList.add('active');

      // Actualizar filtro activo
      currentFilter = btn.dataset.filter;

      // Notificar al callback
      if (onFilterChange) onFilterChange(currentFilter);
    });
  });
}