# Hoja de Ruta

Plan de desarrollo del proyecto RoyalStaySystem con el estado actual y el trabajo pendiente.

## Tabla de Contenidos

- [Estado General](#estado-general)
- [Fases de Desarrollo](#fases-de-desarrollo)
- [Trabajo Pendiente](#trabajo-pendiente)
- [Prioridades](#prioridades)

---

## Estado General

- **Estado del proyecto**: En desarrollo.
- **Modelo de datos**: Completado (21 tablas, restricciones, disparador y consultas).
- **Stack tecnologico**: Definido (Node.js, Express, MySQL, JWT).
- **Aplicacion**: En fase de implementacion.

---

## Fases de Desarrollo

### Fase 1: Fundamentos

| Actividad | Estado |
|-----------|--------|
| Definir el modelo entidad-relacion | Completado |
| Normalizar el modelo de datos | Completado |
| Crear el esquema SQL con restricciones | Completado |
| Generar datos semilla de prueba | Completado |
| Definir las consultas de negocio | Completado |
| Documentar el diccionario de datos | Completado |

### Fase 2: Infraestructura

| Actividad | Estado |
|-----------|--------|
| Definir el stack tecnologico | Completado |
| Configurar el entorno de desarrollo | Pendiente |
| Implementar la capa de acceso a datos | Pendiente |
| Implementar la autenticacion JWT | Pendiente |
| Configurar las variables de entorno | Pendiente |

### Fase 3: Modulos Funcionales

| Actividad | Estado |
|-----------|--------|
| Modulo de autenticacion y usuarios | Pendiente |
| Modulo de clientes | Pendiente |
| Modulo de habitaciones y salones | Pendiente |
| Modulo de reservas | Pendiente |
| Modulo de estadias (check-in y check-out) | Pendiente |
| Modulo de servicios y consumos | Pendiente |
| Modulo de inventario y movimientos | Pendiente |
| Modulo de mantenimiento | Pendiente |
| Modulo de facturacion | Pendiente |
| Modulo de personal | Pendiente |

### Fase 4: Reportes y Calidad

| Actividad | Estado |
|-----------|--------|
| Modulo de reportes y estadisticas | Pendiente |
| Pruebas unitarias | Pendiente |
| Pruebas de integracion | Pendiente |
| Pruebas de extremo a extremo | Pendiente |
| Documentacion de la API | Pendiente |

---

## Trabajo Pendiente

- [ ] Implementar la capa de acceso a datos.
- [ ] Desarrollar los modulos funcionales priorizados.
- [ ] Construir el modulo de autenticacion y control de acceso.
- [ ] Implementar el modulo de reportes y estadisticas.
- [ ] Cubrir los modulos con pruebas unitarias, de integracion y de extremo a extremo.
- [ ] Publicar la documentacion de la API.

---

## Prioridades

1. Infraestructura y acceso a datos: habilita el resto de los modulos.
2. Autenticacion y usuarios: protege la API desde el inicio.
3. Modulos de operacion: clientes, reservas, estadias y facturacion.
4. Modulos de soporte: inventario, mantenimiento, servicios y personal.
5. Reportes y calidad: indicadores de negocio y cobertura de pruebas.

---

## Vinculos Relacionados

- [Alcance del Proyecto](alcance.md)
- [README principal](../../README.md)
- [Documentacion de la API](../api/documentacion-api.md)