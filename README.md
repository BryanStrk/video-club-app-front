# 📼 VIDEO CLUB APP

> *El único videoclub del futuro que opera desde el pasado.*

<div align="center">

![React](https://img.shields.io/badge/React-19-%2300f5ff?style=for-the-badge&logo=react&logoColor=%2300f5ff)
![Vite](https://img.shields.io/badge/Vite-7-%23bf00ff?style=for-the-badge&logo=vite&logoColor=%23bf00ff)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-%23ff006e?style=for-the-badge&logo=tailwindcss&logoColor=%23ff006e)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-%23ffea00?style=for-the-badge&logo=javascript&logoColor=%23ffea00)

</div>

---

## 🌆 Concepto

**Video Club App** es una aplicación web con estética **Cyberpunk / Retro-Futurista** que simula el catálogo digital de un videoclub del futuro. Luces de neón, tipografías retro y una interfaz que mezcla lo analógico con lo digital para transportar al usuario a un año 2049 que aún huele a VHS.

La app permite **gestionar un catálogo completo de películas**: añadir títulos, editar información, eliminar entradas y filtrar por género o director, todo sobre una base de datos JSON local servida por `json-server`.

---

## ✨ Características principales

| Funcionalidad | Descripción |
|---|---|
| 🎬 **Catálogo interactivo** | Vista de todas las películas con poster, género, director, sinopsis y valoración por estrellas |
| 🔍 **Búsqueda y filtrado** | Filtro en tiempo real por título, director y género dinámico |
| ➕ **Añadir película** | Formulario completo con validaciones para registrar nuevos títulos |
| ✏️ **Edición inline** | Modal de edición sin salir de la vista del catálogo |
| 🗑️ **Eliminación con confirmación** | Borrado seguro con diálogo de confirmación |
| 🗺️ **Página de ubicación** | Mapa SVG animado estilo HUD cyberpunk con horarios y datos de contacto |
| 📡 **Feedback en tiempo real** | Toasts de notificación para todas las operaciones CRUD |
| 📱 **Diseño responsivo** | Adaptado a móvil, tablet y escritorio con navbar con hamburguesa |
| 🎨 **Efecto Glitch** | Animaciones de glitch en el título principal y efectos neon en hover |

---

## 🛠️ Tecnologías utilizadas

### Core

| Tecnología | Versión | Rol |
|---|---|---|
| ⚛️ **React** | 19.x | Librería UI principal, componentes funcionales con Hooks |
| ⚡ **Vite** | 7.x | Bundler y servidor de desarrollo con HMR ultrarrápido |
| 🎨 **Tailwind CSS** | 4.x | Estilos utilitarios + plugin `@tailwindcss/vite` |
| 🌐 **React Router DOM** | 7.x | Enrutado SPA client-side |
| 📡 **Axios** | 1.x | Cliente HTTP para comunicación con la API |
| 🗄️ **JSON Server** | 1.x (beta) | API REST mock sobre `db.json` |
| 🔀 **Concurrently** | 9.x | Ejecución paralela de frontend y servidor |

### Tipografías (Google Fonts)

- **Press Start 2P** — Títulos y elementos de acento retro-pixel
- **Orbitron** — Botones y etiquetas futuristas
- **Share Tech Mono** — Cuerpo de texto estilo terminal
- **Rajdhani** — Tags y elementos de interfaz

### Paleta de color

```
◉ Cyan Neon    #00f5ff   — Color de acción principal
◉ Pink Neon    #ff006e   — Acento secundario y alertas
◉ Purple Neon  #bf00ff   — Detalles terciarios
◉ Yellow Neon  #ffea00   — Valoraciones y badges
◉ Dark Base    #050508   — Fondo principal
```

---

## 📋 Requisitos previos

Asegúrate de tener instalado en tu máquina:

- **Node.js** `>= 22.12.0` — [Descargar aquí](https://nodejs.org/)
- **npm** `>= 8.0.0` (incluido con Node.js)

> ⚠️ **Nota importante:** `json-server@1.0.0-beta` y `vite@7` requieren Node.js 22 o superior. Comprueba tu versión con `node --version`.

---

## 🚀 Guía de instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/BryanStrk/video-club-app-front.git
cd video-club-app
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Verifica la base de datos

El archivo `db.json` en la raíz del proyecto actúa como base de datos. Contiene películas de ejemplo listas para usar. No necesitas ninguna configuración adicional.

```
db.json ← Base de datos local (JSON Server)
```

### 4. Arranca la aplicación

**Modo recomendado** — Inicia el frontend y el servidor API simultáneamente:

```bash
npm run dev:full
```

La aplicación estará disponible en:

| Servicio | URL |
|---|---|
| 🖥️ Frontend (Vite) | `http://localhost:5173` |
| 🗄️ API REST (JSON Server) | `http://localhost:3000/movies` |

---

## 📜 Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| 🚀 **Full Stack (mock)** | `npm run dev:full` | Inicia **ambos** servicios en paralelo — frontend + JSON Server *(recomendado para desarrollo)* |
| 🔧 **Solo frontend** | `npm run dev` | Inicia únicamente Vite con HMR — usar cuando el backend Spring Boot está corriendo en `:8080` |
| 🗄️ **Solo API mock** | `npm run server` | Inicia únicamente JSON Server en el puerto `3000` |
| 📦 **Build** | `npm run build` | Genera el bundle de producción optimizado en `/dist` |
| 👁️ **Preview** | `npm run preview` | Sirve localmente el build de producción para revisión |
| 🔍 **Lint** | `npm run lint` | Ejecuta ESLint sobre todos los archivos JS/JSX |

---

## 📁 Estructura del proyecto

```
video-club-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Recursos estáticos (SVGs, imágenes)
│   ├── components/          # Componentes reutilizables
│   │   ├── EditMovieModal.jsx   # Modal de edición de película
│   │   ├── Footer.jsx           # Pie de página con stack tecnológico
│   │   ├── MovieCard.jsx        # Tarjeta de película con controles CRUD
│   │   └── Navbar.jsx           # Barra de navegación responsiva con efecto glitch
│   ├── pages/               # Vistas de la aplicación (rutas)
│   │   ├── Home.jsx             # Landing page con animaciones y ticker
│   │   ├── Movies.jsx           # Catálogo completo con búsqueda y filtros
│   │   ├── AddMovie.jsx         # Formulario de alta de película
│   │   └── Location.jsx         # Página de ubicación con mapa SVG animado
│   ├── services/
│   │   └── movieService.js      # Capa de acceso a la API (Axios)
│   ├── styles/              # CSS modular por capas
│   │   ├── base.css             # Reset y estilos globales del body
│   │   ├── components.css       # Clases reutilizables (botones, cards, inputs)
│   │   ├── effects.css          # Efectos neon, glitch, grid cyberpunk
│   │   └── pages.css            # Estilos específicos de página
│   ├── App.jsx              # Componente raíz y definición de rutas
│   ├── index.css            # Entry point de estilos (@import "tailwindcss")
│   └── main.jsx             # Entry point de React con BrowserRouter
├── db.json                  # Base de datos de películas (JSON Server)
├── vite.config.js           # Configuración de Vite + Tailwind plugin + proxy
├── eslint.config.js         # Configuración de ESLint
└── package.json             # Dependencias y scripts
```

---

## 🎮 Uso rápido

Una vez arrancada la aplicación con `npm run dev:full`:

1. **Explorar el catálogo** → Navega a `/movies` para ver todas las películas
2. **Buscar** → Usa el campo de búsqueda para filtrar por título o director
3. **Filtrar por género** → Pulsa cualquiera de los chips de género generados dinámicamente
4. **Editar** → Haz clic en **Editar** en cualquier tarjeta para abrir el modal
5. **Eliminar** → Haz clic en **Borrar** y confirma en el diálogo
6. **Añadir** → Navega a `/add-movie` y rellena el formulario

---

## 🌐 Endpoints de la API

JSON Server expone automáticamente una API REST completa sobre `db.json`:

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/movies` | Obtener todas las películas |
| `GET` | `/movies/:id` | Obtener una película por ID |
| `POST` | `/movies` | Crear nueva película |
| `PUT` | `/movies/:id` | Reemplazar película completa |
| `PATCH` | `/movies/:id` | Actualizar campos de una película |
| `DELETE` | `/movies/:id` | Eliminar una película |

---

## 🔗 Conexión con el backend real (Spring Boot)

Por defecto la app usa **JSON Server** como mock de desarrollo. Para conectar con el backend Spring Boot real:

### 1. Arranca el backend

Asegúrate de que Spring Boot está corriendo en el puerto `8080`.

> El backend requiere **Java 25** y **Spring Boot 4.0.4**.  
> Repositorio: [video-club-app-back](https://github.com/BryanStrk/video-club-app-back)

### 2. Cambia el proxy en `vite.config.js`

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080',  // ← Spring Boot real
      changeOrigin: true,
      // Sin rewrite: Spring Boot ya gestiona el prefijo /api
    }
  }
}
```

### 3. Lanza solo el frontend

```bash
npm run dev
```

> En producción, Nginx actúa como reverse proxy y redirige `/api/**` al contenedor de Spring Boot. No se necesita configuración adicional en el frontend.

---

## 🐛 Solución de problemas comunes

**`Error al conectar con el servidor`**
→ Verifica que JSON Server esté corriendo: `npm run server`. Si usas solo `npm run dev`, la API mock no estará disponible.

**`Cannot find module` al instalar**
→ Asegúrate de usar Node.js 22+. Ejecuta `node --version` para comprobarlo.

**Las imágenes no cargan**
→ Las películas de ejemplo usan rutas relativas (`/images/...`) o URLs externas. Si una imagen falla, se muestra automáticamente un placeholder generado con el título.

**`401 Unauthorized` al llamar al backend real**
→ Verifica que el token JWT esté almacenado en `localStorage` con la clave `token`. El interceptor de Axios lo adjunta automáticamente en cada petición.

**`non-fast-forward` al hacer `git push`**
→ El remoto tiene commits que tu local no tiene. Ejecuta `git pull --rebase origin main` y luego vuelve a hacer `git push`.

---

## 📄 Licencia

Este proyecto ha sido desarrollado con fines **académicos** en el marco del ciclo formativo de **Desarrollo de Aplicaciones Web (DAW)**.

---

<div align="center">

**⬡ RETROCINE MA ◉ EST. 1982 ◉ SISTEMA OPERATIVO ⬡**

*Hecho con 💙 neón y demasiado café*

</div>
