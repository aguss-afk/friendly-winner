/**
 * taskRenderer.js
 * Orquesta el filtrado, búsqueda y renderizado de tareas
 * Autor: Manuel Lazarte (Persona 4)
 */

import { filterTasks, getCurrentFilter } from './filters.js';
import { searchTasks, getCurrentQuery } from './search.js';

/**
 * Genera un mensaje contextual cuando no hay tareas que mostrar
 * @param {string} filter - Filtro activo
 * @param {string} query - Búsqueda activa
 * @returns {string} Mensaje apropiado
 */
function getEmptyMessage(filter, query) {
  if (query && query.trim() !== '') {
    return `No se encontraron tareas con "${query.trim()}"`;
  }
  if (filter === 'pending') return 'No hay tareas pendientes 🎉';
  if (filter === 'completed') return 'No hay tareas completadas aún';
  return 'No hay tareas que mostrar';
}

/**
 * Aplica filtro y búsqueda a las tareas y las renderiza
 * @param {Array} tasks - Lista completa de tareas
 * @param {HTMLElement} container - Elemento donde renderizar
 */
export function renderFilteredTasks(tasks, container, callbacks = {}) {
  if (!container) return;

  const filter = getCurrentFilter();
  const query = getCurrentQuery();
  const { onToggleComplete, onDelete } = callbacks;

  // Aplicar filtro y búsqueda en orden
  const filtered = filterTasks(tasks, filter);
  const searched = searchTasks(filtered, query);

  container.innerHTML = '';

  // Estado vacío con mensaje contextual
  if (searched.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = getEmptyMessage(filter, query);
    container.appendChild(li);
    return;
  }

  // Renderizar tareas
  searched.forEach(task => {
    const li = document.createElement('li');
    li.className = `task ${task.completed ? 'completed' : ''}`;

    const status = document.createElement('span');
    status.className = 'task-status';
    status.textContent = task.completed ? '✓' : '○';

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.type = 'button';
    completeBtn.textContent = task.completed ? 'Deshacer' : 'Completar';
    completeBtn.addEventListener('click', () => {
      if (typeof onToggleComplete === 'function') {
        onToggleComplete(task.id);
      }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
      if (typeof onDelete === 'function') {
        onDelete(task.id);
      }
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(status);
    li.appendChild(text);
    li.appendChild(actions);
    container.appendChild(li);
  });
}