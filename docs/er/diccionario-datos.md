# Diccionario de Datos

Diccionario de datos del esquema `bd_hotel_system_pms`. Contiene la descripcion de las 21 tablas del sistema, sus campos, tipos, restricciones y relaciones.

## Tabla de Contenidos

- [Convenciones](#convenciones)
- [1. Tablas de Referencia](#1-tablas-de-referencia)
- [2. Tablas de Negocio](#2-tablas-de-negocio)
- [3. Tablas Transaccionales](#3-tablas-transaccionales)
- [4. Tablas Financieras](#4-tablas-financieras)
- [5. Tabla Operativa](#5-tabla-operativa)

---

## Convenciones

- `PK`: clave primaria.
- `FK`: clave foranea.
- `UQ`: valor unico.
- `CK`: restriccion de validacion (check constraint).
- Las columnas con generacion automatica (`GENERATED ALWAYS AS ... STORED`) se calculan en el motor de base de datos.

---

## 1. Tablas de Referencia

### 1.1 tipo_documento

Catalogo de tipos de documento de identidad aceptados.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_tipo_documento | int | PK, auto_increment | Identificador del tipo de documento |
| abreviatura | varchar(5) | UQ, not null | Abreviatura (CC, TI, CE, PAS, NIT, PEP, RC, VNM, VTP, OTH) |
| nombre | varchar(50) | UQ, not null | Nombre completo del documento |

Valores semilla: Cedula de ciudadania (CC), Tarjeta de identidad (TI), Cedula de extranjeria (CE), Pasaporte (PAS), NIT, Permiso especial de permanencia (PEP), Registro civil (RC), Visa de negocios (VNM), Visa de turismo (VTP), Otro documento (OTH).

### 1.2 cargo

Catalogo de cargos laborales del hotel.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_cargo | int | PK, auto_increment | Identificador del cargo |
| nombre | varchar(50) | UQ, not null | Nombre del cargo |

Valores semilla: Gerente, Recepcionista, Camarera, Mantenimiento, Contador, Botones, Conductor, Seguridad.

### 1.3 tipo_mantenimiento

Catalogo de tipos de mantenimiento con su prioridad.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_tipo | int | PK, auto_increment | Identificador del tipo de mantenimiento |
| nombre | varchar(60) | UQ, not null | Tipo de mantenimiento |
| prioridad | varchar(20) | not null | Prioridad: Inmediata, Alta, Media o Baja |

Valores semilla: Limpieza y saneamiento (Inmediata), Comodidad (Media), Suministros (Media), Conectividad (Baja), Funcionamiento de instalacion (Alta), Electricidad (Alta), Plomeria (Alta), Carpinteria (Baja), Pintura (Media), Jardineria (Baja).

### 1.4 categoria_servicio

Catalogo de categorias para los servicios del hotel.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_categoria | int | PK, auto_increment | Identificador de la categoria |
| nombre | varchar(60) | UQ, not null | Nombre de la categoria |

Valores semilla: Alimentos y bebidas, Spa y bienestar, Lavanderia, Transporte, Entretenimiento, Comunicacion, Gimnasio, Negocios/Eventos, Ninera/Kids Club, Otros.

### 1.5 categoria_producto

Catalogo de categorias para los productos de inventario.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_categoria | int | PK, auto_increment | Identificador de la categoria |
| nombre | varchar(60) | UQ, not null | Nombre de la categoria |

Valores semilla: Alimentos y bebidas, Amenidades, Limpieza, Papeleria, Mantenimiento, Electronicos, Textiles, Mobiliario, Decoracion, Otros.

---

## 2. Tablas de Negocio

### 2.1 cliente

Registro de clientes del hotel.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_cliente | int | PK, auto_increment | Identificador del cliente |
| id_tipo_documento | int | FK, not null | Tipo de documento (tipo_documento) |
| numero_documento | varchar(30) | UQ, not null | Numero de documento |
| nombres_c | varchar(100) | not null | Nombres del cliente |
| apellidos_c | varchar(100) | not null | Apellidos del cliente |
| sexo_c | varchar(1) | CK, not null | Sexo: M, F o E (empresa) |
| telefono_c | varchar(20) | - | Telefono de contacto |
| email_c | varchar(100) | - | Correo electronico |
| direccion_c | varchar(200) | not null | Direccion de residencia |
| nacionalidad | varchar(60) | - | Nacionalidad del cliente |
| fecha_registro | date | not null, default current_date | Fecha de registro |

Reglas: al menos uno de `telefono_c` o `email_c` debe registrarse (check constraint).

### 2.2 empleado

Registro de empleados del hotel.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_empleado | int | PK, auto_increment | Identificador del empleado |
| nombres_e | varchar(100) | not null | Nombres del empleado |
| apellidos_e | varchar(100) | not null | Apellidos del empleado |
| sexo_e | varchar(1) | CK, not null | Sexo: M o F |
| telefono_e | varchar(20) | - | Telefono de contacto |
| email_e | varchar(100) | not null | Correo electronico institucional |
| id_cargo | int | FK, not null | Cargo (cargo) |
| salario | decimal(15,2) | not null | Salario del empleado |
| fecha_contratacion | date | not null | Fecha de contratacion |

### 2.3 usuario

Credenciales de acceso al sistema vinculadas a empleados.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_usuario | int | PK, auto_increment | Identificador del usuario |
| id_empleado | int | FK, not null | Empleado asociado (empleado) |
| username | varchar(80) | UQ, not null | Nombre de usuario |
| password | varchar(255) | not null | Contrasena cifrada (scrypt) |

### 2.4 habitacion

Habitaciones del hotel.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_habitacion | int | PK | Numero de la habitacion |
| tipo | varchar(60) | not null | Tipo de habitacion |
| capacidad | int | not null | Capacidad de huespedes |
| estado | varchar(20) | CK, not null | Disponible, Ocupada o En mantenimiento |
| descripcion | varchar(200) | not null | Descripcion de la habitacion |

### 2.5 salon

Salones para eventos y conferencias.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_salon | int | PK | Numero del salon |
| capacidad | int | not null | Capacidad de personas |
| estado | varchar(20) | CK, not null | Disponible, Ocupado o En mantenimiento |
| descripcion | varchar(200) | not null | Descripcion del salon |

---

## 3. Tablas Transaccionales

### 3.1 reserva

Reservaciones creadas por clientes y gestionadas por empleados.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_reserva | int | PK, auto_increment | Identificador de la reserva |
| id_cliente | int | FK, not null | Cliente (cliente) |
| id_empleado | int | FK, not null | Empleado responsable (empleado) |
| fecha_reserva | date | not null, default current_date | Fecha en que se crea la reserva |
| fecha_entrada | datetime | not null | Fecha y hora de entrada |
| fecha_salida | datetime | - | Fecha y hora de salida |
| estado | varchar(20) | CK, not null | Pendiente, Confirmada, En proceso, Cancelada o Terminada |
| costo_estimado | decimal(15,2) | not null | Costo estimado de la reserva |

### 3.2 reserva_habitacion

Relacion entre reservas y habitaciones asignadas.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_res_ha | int | PK, auto_increment | Identificador de la relacion |
| id_reserva | int | FK, not null | Reserva (reserva) |
| id_habitacion | int | FK, not null | Habitacion (habitacion) |
| precio_noche | decimal(15,2) | not null | Precio por noche pactado |

Relacion unica por par (reserva, habitacion).

### 3.3 reserva_salon

Relacion entre reservas y salones con horarios.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_res_sa | int | PK, auto_increment | Identificador de la relacion |
| id_reserva | int | FK, not null | Reserva (reserva) |
| id_salon | int | FK, not null | Salon (salon) |
| tiempo_entrada | datetime | not null | Hora de inicio |
| tiempo_salida | datetime | not null | Hora de fin |
| tiempo_uso | int | generated (stored) | Horas de uso, calculadas automaticamente |
| precio_hora | decimal(15,2) | not null | Precio por hora pactado |

Relacion unica por par (reserva, salon). `tiempo_uso` = TIMESTAMPDIFF(hora, entrada, salida).

### 3.4 estadia

Registro de estancias de huespedes.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_estadia | int | PK, auto_increment | Identificador de la estadia |
| id_reserva | int | FK, not null | Reserva asociada (reserva) |
| id_empleado_checkin | int | FK | Empleado que realizo el check-in |
| id_empleado_checkout | int | FK | Empleado que realizo el check-out |
| fecha_checkin | datetime | - | Fecha y hora de ingreso |
| fecha_checkout | datetime | - | Fecha y hora de salida |
| estado | varchar(20) | CK, not null | Activa, Finalizada o Cancelada |

### 3.5 servicio

Catalogo de servicios ofrecidos a los huespedes.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_servicio | int | PK, auto_increment | Identificador del servicio |
| id_categoria | int | FK, not null | Categoria (categoria_servicio) |
| nombre | varchar(100) | not null | Nombre del servicio |
| precio | decimal(15,2) | not null | Precio del servicio |
| descripcion | varchar(200) | - | Descripcion del servicio |

### 3.6 inventario

Productos disponibles en la bodega del hotel.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_producto | int | PK, auto_increment | Identificador del producto |
| id_categoria | int | FK, not null | Categoria (categoria_producto) |
| nombre | varchar(100) | not null | Nombre del producto |
| stock | int | CK, not null, default 0 | Cantidad en stock (mayor o igual a 0) |
| precio_unitario | decimal(15,2) | not null | Precio unitario |

### 3.7 consumo

Consumos de servicios o productos asociados a una reserva y opcionalmente a una estadia.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_consumo | int | PK, auto_increment | Identificador del consumo |
| id_reserva | int | FK, not null | Reserva asociada (reserva) |
| id_estadia | int | FK | Estadia (solo si el consumo lo hace un huesped) |
| id_servicio | int | FK | Servicio (opcional si es un producto) |
| id_producto | int | FK | Producto (opcional si es un servicio) |
| cantidad | int | not null | Cantidad consumida |
| fecha | date | not null, default current_date | Fecha del consumo |

Regla: debe existir un servicio o un producto (check constraint).

### 3.8 movimiento

Movimientos de entrada y salida de inventario.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_movimiento | int | PK, auto_increment | Identificador del movimiento |
| id_producto | int | FK, not null | Producto (inventario) |
| id_empleado | int | FK, not null | Empleado que registra el movimiento |
| tipo | varchar(10) | CK, not null | Entrada o Salida |
| cantidad | int | not null | Cantidad movida |
| fecha | date | not null, default current_date | Fecha del movimiento |

---

## 4. Tablas Financieras

### 4.1 factura

Facturas emitidas sobre las reservas.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_factura | int | PK, auto_increment | Identificador de la factura |
| id_reserva | int | FK, not null | Reserva facturada (reserva) |
| id_empleado | int | FK, not null | Empleado que emite la factura |
| fecha_emision | date | not null, default current_date | Fecha de emision |
| subtotal | decimal(15,2) | not null | Subtotal de la factura |
| impuestos | decimal(15,2) | not null | Valor de impuestos |
| total | decimal(15,2) | generated (stored) | Total = subtotal + impuestos |
| metodo_pago | varchar(30) | CK, not null | Efectivo, Tarjeta credito, Tarjeta debito o Transferencia |

### 4.2 detalle_factura

Lineas de detalle de cada factura.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_detalle | int | PK, auto_increment | Identificador del detalle |
| id_factura | int | FK, not null | Factura (factura) |
| id_consumo | int | FK | Consumo asociado, si existe |
| id_res_ha | int | FK | Reserva de habitacion asociada |
| id_res_sa | int | FK | Reserva de salon asociada |
| concepto | varchar(100) | not null | Concepto facturado |
| cantidad | int | not null | Cantidad facturada |
| precio_unitario | decimal(15,2) | not null | Precio unitario |
| subtotal | decimal(15,2) | generated (stored) | Subtotal = cantidad x precio_unitario |

Regla: debe existir un consumo, una reserva de habitacion o una reserva de salon (check constraint).

---

## 5. Tabla Operativa

### 5.1 mantenimiento

Solicitudes de mantenimiento sobre habitaciones o salones.

| Campo | Tipo | Restricciones | Descripcion |
|-------|------|---------------|-------------|
| id_mantenimiento | int | PK, auto_increment | Identificador del mantenimiento |
| id_habitacion | int | FK | Habitacion (opcional si es salon) |
| id_salon | int | FK | Salon (opcional si es habitacion) |
| id_tipo | int | FK, not null | Tipo de mantenimiento (tipo_mantenimiento) |
| id_empleado | int | FK, not null | Empleado asignado (empleado) |
| descripcion | varchar(200) | not null | Descripcion del problema |
| fecha_reporte | date | not null, default current_date | Fecha del reporte |
| fecha_solucion | datetime | - | Fecha de solucion |
| estado | varchar(20) | CK, not null | En mantenimiento, Finalizado o Pendiente |

---

## Relaciones Clave

```
tipo_documento   1 - N   cliente
cargo            1 - N   empleado
empleado         1 - 1   usuario
cliente          1 - N   reserva
empleado         1 - N   reserva
reserva          1 - N   reserva_habitacion    N - 1   habitacion
reserva          1 - N   reserva_salon         N - 1   salon
reserva          1 - N   estadia
categoria_servicio   1 - N   servicio
categoria_producto  1 - N   inventario
reserva          1 - N   consumo  (N - 1 servicio | N - 1 inventario)
inventario       1 - N   movimiento
empleado         1 - N   movimiento
reserva          1 - N   factura
empleado         1 - N   factura
factura          1 - N   detalle_factura  (N - 1 consumo | N - 1 reserva_habitacion | N - 1 reserva_salon)
tipo_mantenimiento   1 - N   mantenimiento
habitacion       1 - N   mantenimiento
salon            1 - N   mantenimiento
```

---

## Vinculos Relacionados

- [Modelo de Datos](modelo-datos.md)
- [Consultas SQL](../consultas-sql.md)
- [README principal](../../README.md)