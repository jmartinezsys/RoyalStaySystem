# Documentacion de la API

Especificacion de la API REST de RoyalStaySystem, construida sobre Node.js, Express y MySQL, con autenticacion por tokens JWT.

> Estado: la API se encuentra en desarrollo. Esta documentacion define las convenciones y el esquema de endpoints esperado por modulo.

## Tabla de Contenidos

- [Convenciones Generales](#convenciones-generales)
- [Autenticacion](#autenticacion)
- [Respuestas](#respuestas)
- [Endpoints por Modulo](#endpoints-por-modulo)
- [Ejemplos](#ejemplos)

---

## Convenciones Generales

- **Base URL**: `http://localhost:3000/api`
- **Formato de datos**: JSON.
- **Recursos en plural**: `/clientes`, `/reservas`, `/habitaciones`.
- **Identificadores**: numericos, expuestos en la URL (`/clientes/1`).
- **Versionado**: prefijo `/v1` reservado para futuras versiones.

### Metodos HTTP

| Metodo | Uso |
|--------|-----|
| GET | Consultar recursos o colecciones |
| POST | Crear recursos |
| PUT / PATCH | Actualizar recursos |
| DELETE | Eliminar recursos |

---

## Autenticacion

El acceso a los endpoints protegidos requiere un token JWT.

### Obtener token

```
POST /api/auth/login
```

Cuerpo:

```json
{
  "username": "lfernandez_recep",
  "password": "********"
}
```

Respuesta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Uso del token

Incluir el token en la cabecera de autorizacion:

```
Authorization: Bearer <token>
```

### Permisos por rol

La autorizacion depende del cargo del empleado asociado al usuario. Por ejemplo, la facturacion requiere el rol de contabilidad o gerencia; el check-in y check-out se gestionan desde recepcion.

---

## Respuestas

### Respuesta exitosa

```json
{
  "data": { }
}
```

### Error de validacion

Codigo HTTP `400`:

```json
{
  "error": "mensaje de validacion"
}
```

### No autorizado

Codigo HTTP `401`: falta el token o es invalido.

### Acceso denegado

Codigo HTTP `403`: el usuario no tiene permisos para la operacion.

### Recurso no encontrado

Codigo HTTP `404`.

### Error interno

Codigo HTTP `500`.

---

## Endpoints por Modulo

### Autenticacion y Seguridad

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| POST | /api/auth/login | Iniciar sesion y obtener token |
| POST | /api/auth/logout | Cerrar sesion |
| GET | /api/usuarios | Listar usuarios del sistema |
| POST | /api/usuarios | Crear usuario |
| PUT | /api/usuarios/:id | Actualizar usuario |

### Clientes

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/clientes | Listar clientes |
| GET | /api/clientes/:id | Consultar un cliente |
| POST | /api/clientes | Crear cliente |
| PUT | /api/clientes/:id | Actualizar cliente |
| DELETE | /api/clientes/:id | Eliminar cliente |

### Habitaciones

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/habitaciones | Listar habitaciones |
| GET | /api/habitaciones/disponibles | Habitaciones disponibles |
| POST | /api/habitaciones | Registrar habitacion |
| PUT | /api/habitaciones/:id | Actualizar habitacion |
| PATCH | /api/habitaciones/:id/estado | Cambiar estado de habitacion |

### Salones

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/salones | Listar salones |
| GET | /api/salones/disponibles | Salones disponibles |
| POST | /api/salones | Registrar salon |
| PUT | /api/salones/:id | Actualizar salon |

### Reservas

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/reservas | Listar reservas |
| GET | /api/reservas/:id | Consultar una reserva |
| POST | /api/reservas | Crear reserva |
| PUT | /api/reservas/:id | Actualizar reserva |
| PATCH | /api/reservas/:id/estado | Cambiar estado de reserva |
| POST | /api/reservas/:id/habitaciones | Asignar habitaciones |
| POST | /api/reservas/:id/salones | Asignar salones |

### Estadias (Check-in / Check-out)

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/estadias | Listar estadias |
| GET | /api/estadias/activas | Estadias activas |
| POST | /api/estadias/checkin | Realizar check-in |
| PATCH | /api/estadias/:id/checkout | Realizar check-out |

### Facturacion

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/facturas | Listar facturas |
| GET | /api/facturas/:id | Consultar una factura |
| POST | /api/facturas | Generar factura |
| GET | /api/facturas/:id/detalles | Detalle de una factura |

### Servicios y Consumos

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/servicios | Listar servicios |
| POST | /api/servicios | Registrar servicio |
| POST | /api/consumos | Registrar consumo de servicio o producto |

### Inventario

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/inventario | Listar productos |
| GET | /api/inventario/bajo-stock | Productos con stock bajo |
| POST | /api/inventario | Registrar producto |
| PUT | /api/inventario/:id | Actualizar producto |
| POST | /api/movimientos | Registrar movimiento de entrada o salida |

### Mantenimiento

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/mantenimientos | Listar solicitudes |
| GET | /api/mantenimientos/pendientes | Solicitudes pendientes |
| POST | /api/mantenimientos | Crear solicitud |
| PATCH | /api/mantenimientos/:id | Actualizar estado o fecha de solucion |

### Personal

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/empleados | Listar empleados |
| POST | /api/empleados | Registrar empleado |
| PUT | /api/empleados/:id | Actualizar empleado |

### Reportes

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/reportes/facturacion | Resumen de facturacion por metodo de pago |
| GET | /api/reportes/ocupacion | Ocupacion por tipo de habitacion |
| GET | /api/reportes/nomina | Gasto de nomina por cargo |
| GET | /api/reportes/inventario | Valorizacion de bodega |

---

## Ejemplos

### Crear un cliente

```
POST /api/clientes
Authorization: Bearer <token>
Content-Type: application/json
```

```json
{
  "id_tipo_documento": 1,
  "numero_documento": "10102020",
  "nombres_c": "Juan David",
  "apellidos_c": "Perez Ruiz",
  "sexo_c": "M",
  "telefono_c": "3109876534",
  "direccion_c": "Calle 45 #12-30",
  "nacionalidad": "Colombiana"
}
```

### Crear una reserva

```
POST /api/reservas
Authorization: Bearer <token>
Content-Type: application/json
```

```json
{
  "id_cliente": 1,
  "fecha_entrada": "2026-05-01T14:00:00",
  "fecha_salida": "2026-05-05T12:00:00",
  "habitaciones": [
    { "id_habitacion": 101, "precio_noche": 150000 }
  ]
}
```

### Iniciar sesion

```
POST /api/auth/login
Content-Type: application/json
```

```json
{
  "username": "amendoza_admin",
  "password": "********"
}
```

---

## Vinculos Relacionados

- [Guia de Instalacion](../manual/guia-instalacion.md)
- [Diccionario de Datos](../er/diccionario-datos.md)
- [README principal](../../README.md)