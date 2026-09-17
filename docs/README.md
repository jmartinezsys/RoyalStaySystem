# Documentacion de RoyalStaySystem

Indice general de la documentacion tecnica y funcional del sistema de gestion hotelera RoyalStaySystem.

---

## Estructura de la Documentacion

```
docs/
├── README.md                     # Este indice
├── consultas-sql.md              # Catalogo de consultas SQL del sistema
├── api/
│   └── documentacion-api.md      # Endpoints, autenticacion y ejemplos de la API
├── er/
│   ├── modelo-datos.md           # Modelo entidad-relacion y areas del esquema
│   └── diccionario-datos.md      # Detalle de las 21 tablas y sus campos
├── manual/
│   ├── guia-instalacion.md       # Instalacion del entorno y la base de datos
│   └── manual-usuario.md         # Flujos de uso por rol
└── planificacion/
    ├── alcance.md                # Alcance, objetivos y usuarios del sistema
    └── roadmap.md                # Hoja de ruta del proyecto
```

---

## Indice de Documentos

### Base de Datos

| Documento | Descripcion |
|-----------|-------------|
| [Diccionario de Datos](er/diccionario-datos.md) | Descripcion detallada de las 21 tablas, sus campos, tipos, restricciones y relaciones |
| [Modelo de Datos](er/modelo-datos.md) | Modelo entidad-relacion, areas del esquema y elementos del modelo |
| [Consultas SQL](consultas-sql.md) | Catalogo de las 20 consultas del sistema organizadas por categoria |

### Manuales

| Documento | Descripcion |
|-----------|-------------|
| [Guia de Instalacion](manual/guia-instalacion.md) | Requisitos previos, instalacion del entorno y creacion de la base de datos |
| [Manual de Usuario](manual/manual-usuario.md) | Flujos de trabajo de cada rol en el sistema |

### API

| Documento | Descripcion |
|-----------|-------------|
| [Documentacion de la API](api/documentacion-api.md) | Endpoints, esquema de autenticacion JWT y convenciones de la API |

### Planificacion

| Documento | Descripcion |
|-----------|-------------|
| [Alcance del Proyecto](planificacion/alcance.md) | Contexto, alcance, objetivos y usuarios del sistema |
| [Hoja de Ruta](planificacion/roadmap.md) | Fases de desarrollo, estado actual y trabajo pendiente |

---

## Convenciones

- La documentacion se mantiene en formato Markdown (`.md`).
- Las rutas entre documentos son relativas para que los enlaces funcionen dentro del repositorio.
- Cada documento incluye una tabla de contenidos cuando su extensión lo justifica.

---

## Vinculos Relacionados

- [README principal](../README.md): descripcion general del proyecto.
- [Esquema SQL](../database/scripts/): scripts de creacion de la base de datos.
- [Datos semilla](../database/seeds/): datos de prueba del sistema.