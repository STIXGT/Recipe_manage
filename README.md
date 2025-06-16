
---

## ⚙️ Configuración y Ejecución

### 🐳 Requisitos Previos
- Docker y Docker Compose
- pnpm instalado globalmente (`npm i -g pnpm`)

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu_usuario/mi-proyecto-recetas.git
cd mi-proyecto-recetas
```

---

### 2. Levantar la base de datos con Docker

```bash
docker-compose up -d
```

---

### 3. Configurar variables de entorno para Prisma

Crea el archivo `.env` dentro de `/backend`:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/mi_basededatos"
```

---

### 4. Instalar dependencias del backend

```bash
cd backend
pnpm install
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm dev
```

---

### 5. Instalar dependencias del frontend

```bash
cd ../frontend
pnpm install
pnpm dev
```

---

## 📌 Rutas principales del backend

- `GET    /api/users`         → Obtener usuarios
- `POST   /api/users`         → Crear usuario
- `GET    /api/recipes`       → Obtener recetas
- `POST   /api/recipes`       → Crear receta
- *(etc. para PUT y DELETE...)*

---

## 📦 Base de datos

Se utiliza una instancia de PostgreSQL definida en `docker-compose.yml`, y el esquema es manejado por Prisma.

Puedes revisar o modificar los modelos en:  
`/backend/prisma/schema.prisma`

---

## ✅ Estado actual del proyecto

- [x] CRUD de usuarios
- [x] CRUD de recetas
- [x] Conexión Astro → Express → PostgreSQL
- [x] CORS habilitado para desarrollo

---

## 🔐 Seguridad

- Middleware `express.json()` para parsear JSON
- Middleware `cors()` para habilitar conexión entre orígenes
- Control de errores básico en los controladores

---

## 💡 Futuras mejoras

- Validación de datos con Zod
- Autenticación con JWT
- Paginación y búsqueda
- Panel de administración

---

## 👨‍💻 Autor

- Stiven Guanoquiza  
- Estudiante de Ingeniería de Software  
- GitHub: [@tu_usuario](https://github.com/tu_usuario)

---

¡Gracias por revisar este proyecto!
