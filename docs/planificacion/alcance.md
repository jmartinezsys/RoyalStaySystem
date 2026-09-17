# Alcance del Proyecto

Documento de planificacion que define el contexto, los objetivos, los usuarios y los limites del proyecto RoyalStaySystem.

## Tabla de Contenidos

- [Contexto](#contexto)
- [Objetivo General](#objetivo-general)
- [Objetivos Especificos](#objetivos-especificos)
- [Usuarios del Sistema](#usuarios-del-sistema)
- [Alcance Funcional](#alcance-funcional)
- [Fuera del Alcance](#fuera-del-alcance)
- [Criterios de Aceptacion](#criterios-de-aceptacion)

---

## Contexto

Los hoteles manejan procesos dispersos: reservas en papel o aplicaciones aisladas, facturacion manual, inventario desactualizado y sin trazabilidad del mantenimiento. Esto provoca perdidas de informacion, errores de cobro y una mala experiencia del huesped.

RoyalStaySystem nace como un sistema de gestion hotelera que centraliza estas operaciones en una sola plataforma, apoyado en un modelo de datos normalizado que garantiza la consistencia de la informacion.

---

## Objetivo General

Desarrollar un sistema de gestion hotelera que automatice y organice los procesos mas relevantes de un hotel mediante una API REST con Node.js y Express sobre una base de datos MySQL normalizada.

---

## Objetivos Especificos

- Automatizar la reservacion de habitaciones y salones con control de estados.
- Gestionar la operacion de check-in y check-out de los huespedes.
- Emitir facturas con calculo automatico de impuestos y soportar multiples metodos de pago.
- Centralizar el registro de clientes, empleados y usuarios del sistema.
- Controlar el inventario y sus movimientos con actualizacion automatica de stock.
- Administrar las solicitudes de mantenimiento de las instalaciones.
- Proveer reportes operativos y financieros para la toma de decisiones.
- Proteger el acceso mediante autenticacion JWT y credenciales cifradas.

---

## Usuarios del Sistema

| Rol | Necesidad cubierta |
|-----|---------------------|
| Recepcionista | Registrar clientes, crear y gestionar reservas, realizar check-in y check-out |
| Contador | Generar facturas y controlar los metodos de pago |
| Gerente | Consultar reportes, configurar el sistema y supervisar la operacion |
| Mantenimiento | Reportar y dar seguimiento a las solicitudes de mantenimiento |
| Inventario | Registrar productos y movimientos de entrada y salida |
| Huesped | Recibir servicios con consumos asociados a su estadia |

---

## Alcance Funcional

### Gestion de Clientes

- Registro de clientes con tipo de documento, datos personales, contacto y nacionalidad.

### Gestion de Reservas

- Reservacion de habitaciones y salones con fechas, estados y costos estimados.
- Asignacion multiple de habitaciones y salones por reserva.

### Operacion de Estadias

- Registro de check-in y check-out con empleados responsables.
- Control de estados de estadia (activa, finalizada, cancelada).

### Facturacion

- Generacion de facturas con subtotal, impuestos y total automaticos.
- Registro del detalle por consumo, habitacion o salon.
- Metodos de pago: efectivo, tarjeta de credito, tarjeta de debito, transferencia.

### Servicios y Consumos

- Catalogo de servicios por categoria.
- Registro de consumos de servicios y productos asociados a reservas o estadias.

### Inventario

- Catalogo de productos por categoria.
- Movimientos de entrada y salida con actualizacion automatica de stock.
- Valorizacion de la mercancia en bodega.

### Mantenimiento

- Solicitudes sobre habitaciones o salones con tipo, prioridad y estados.

### Personal y Seguridad

- Registro de empleados y cargos.
- Usuarios con credenciales cifradas y autenticacion JWT.

### Reportes

- Facturacion, nomina, ocupacion e inventario.

---

## Fuera del Alcance

- Modulo de nomina completo (liquidacion de prestaciones sociales).
- Integraciones con pasarelas de pago en linea.
- Aplicacion movil nativa.
- Modulo de reservas desde el portal del huesped.
- Notificaciones por correo o mensajeria a los clientes.

---

## Criterios de Aceptacion

- La base de datos se crea correctamente con los scripts SQL incluidos en el repositorio.
- Las operaciones CRUD de los modulos priorizados funcionan a traves de la API.
- La autenticacion JWT protege los endpoints sensibles.
- Los estados de las entidades solo aceptan los valores definidos en el modelo.
- El stock del inventario se actualiza automaticamente con cada movimiento.
- Las facturas calculan subtotal, impuestos y total de forma correcta.
- El modulo de reportes entrega los indicadores definidos.

---

## Vinculos Relacionados

- [Hoja de Ruta](roadmap.md)
- [README principal](../../README.md)
- [Manual de Usuario](../manual/manual-usuario.md)