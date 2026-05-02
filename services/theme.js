/**
 * theme.js
 * Gestión del modo oscuro y persistencia de tema
 * Autor: Manuel Lazarte (Persona 4)
 */

const STORAGE_KEY = 'todo-app-theme';
const DARK_CLASS = 'dark-mode';

/**
 * Aplica el tema al body
 * @param {string} theme - 'light' | 'dark'
 */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add(DARK_CLASS);
  } else {
    document.body.classList.remove(DARK_CLASS);
  }
  updateToggleButton(theme);
}

/**
 * Actualiza el ícono y aria-label del botón
 */
function updateToggleButton(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (theme === 'dark') {
    btn.textContent = '☀️';
    btn.setAttribute('aria-label', 'Cambiar a modo claro');
  } else {
    btn.textContent = '🌙';
    btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
  }
}

/**
 * Carga el tema guardado en localStorage al iniciar
 */
export function loadTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const theme = saved === 'dark' ? 'dark' : 'light';
  applyTheme(theme);
}

/**
 * Cambia entre modo claro y oscuro
 */
export function toggleTheme() {
  const isDark = document.body.classList.contains(DARK_CLASS);
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme);
}

/**
 * Inicializa el botón de toggle del tema
 */
export function initTheme() {
  loadTheme();
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
}