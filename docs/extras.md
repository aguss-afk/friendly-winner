# Extras y Mejoras - Persona 4

Esta rama (`feature/auth-extra`) contiene las funcionalidades extra del To-Do List.

## ✅ Funcionalidades implementadas

- [x] **Filtros** (todas / pendientes / completadas)
- [x] **Buscador** de tareas en tiempo real
- [x] **Botón de limpiar** búsqueda con un clic
- [x] **Modo oscuro** (dark mode) con toggle
- [x] **Persistencia del tema** en `localStorage`
- [x] **Mensajes contextuales** cuando no hay resultados

## 📁 Estructura de archivos
/services
├── filters.js        → Lógica de filtrado por estado
├── search.js         → Búsqueda en tiempo real
├── theme.js          → Gestión del modo oscuro
└── taskRenderer.js   → Orquestador (combina filtro + búsqueda + render)
extras-demo.html        → Demo standalone para probar todas las features
extras.css              → Estilos (incluye variables para dark mode)

## 🚀 Cómo probar la demo

Abre el archivo `extras-demo.html` directamente en el navegador:

```bash
open extras-demo.html
```

Verás:
- Una lista de 5 tareas mock (3 pendientes, 2 completadas)
- Buscador en la parte superior
- Botones de filtro (Todas / Pendientes / Completadas)
- Botón 🌙 / ☀️ para alternar tema

## 🔌 Cómo integrar con el resto del equipo

Cuando la rama `develop` tenga el `index.html` y el array de tareas reales:

### 1. Agregar los inputs/botones en el HTML principal

```html
<!-- Buscador -->
<div class="search-wrapper">
  <span class="search-icon">🔍</span>
  <input type="text" id="search-input" class="search-input" placeholder="Buscar tareas..." />
  <button id="search-clear" class="search-clear" hidden>✕</button>
</div>

<!-- Filtros -->
<div class="filters">
  <button class="filter-btn active" data-filter="all">Todas</button>
  <button class="filter-btn" data-filter="pending">Pendientes</button>
  <button class="filter-btn" data-filter="completed">Completadas</button>
</div>

<!-- Botón de tema -->
<button id="theme-toggle" class="theme-toggle">🌙</button>
```

### 2. Importar los módulos en el JS principal

```javascript
import { initFilters } from './services/filters.js';
import { initSearch } from './services/search.js';
import { initTheme } from './services/theme.js';
import { renderFilteredTasks } from './services/taskRenderer.js';

// Asumiendo que `tasks` es el array global del proyecto
function update() {
  renderFilteredTasks(tasks, document.getElementById('task-list'));
}

initFilters(update);
initSearch(update);
initTheme();
update();
```

### 3. Asegurar que cada tarea tenga la estructura

```javascript
{ id: 1, text: 'Mi tarea', completed: false }
```

## 🎨 Variables CSS reutilizables

Los estilos usan variables que se sobrescriben en dark mode:

| Variable | Modo claro | Modo oscuro |
|----------|------------|-------------|
| `--bg-color` | `#f5f5f5` | `#0f172a` |
| `--text-color` | `#1a1a1a` | `#f1f5f9` |
| `--primary` | `#4f46e5` | `#818cf8` |

Esto permite que el tema cambie globalmente cambiando solo una clase en el `<body>`.

## 📦 Dependencias

Ninguna. Todo está hecho con **JavaScript vanilla** (módulos ES6) y **CSS puro**.

## 👤 Autor

**Manuel Lazarte** — Persona 4 (Extras / Integración) 
Rama: `feature/auth-extra`