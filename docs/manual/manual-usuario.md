# Manual de Usuario

Guia de uso del sistema RoyalStaySystem orientada a los roles que operan en un hotel.

## Tabla de Contenidos

- [Acceso al Sistema](#acceso-al-sistema)
- [Roles del Sistema](#roles-del-sistema)
- [Flujos por Rol](#flujos-por-rol)
- [Elementos Comunes](#elementos-comunes)

---

## Acceso al Sistema

El acceso se realiza mediante un usuario y contrasena asignados por la administracion. Las credenciales se asocian a un empleado y su cargo determina los permisos disponibles.

Los datos semilla incluyen usuarios de ejemplo para gerencia, recepcion y contabilidad, cuyos accesos deben cambiarse antes de utilizar el sistema en produccion.

---

## Roles del Sistema

| Rol | Area | Funciones principales |
|-----|------|-----------------------|
| Gerente | Administracion | Consulta de reportes, configuracion y supervision general |
| Recepcionista | Recepcion | Registro de clientes, reservas, check-in y check-out |
| Contador | Finanzas | Facturacion y conciliacion de pagos |
| Camarera | Limpieza | Apoyo a mantenimiento y gestion de habitaciones |
| Mantenimiento | Operaciones | Atencion de solicitudes de mantenimiento |
| Botones | Recepcion | Apoyo a huespedes y traslados |
| Conductor | Transporte | Servicios de transporte |
| Seguridad | Operaciones | Control y seguridad de instalaciones |

---

## Flujos por Rol

### Recepcion

1. **Registrar cliente**: crear el expediente del cliente con tipo de documento, datos personales, contacto y nacionalidad.
2. **Crear reserva**: seleccionar cliente, fechas de entrada y salida, habitaciones o salones, y calcular el costo estimado.
3. **Check-in**: confirmar la llegada del huesped, asociar la estadia activa y registrar el empleado responsable.
4. **Check-out**: finalizar la estadia, verificar consumos pendientes y derivar a facturacion.

### Facturacion

1. **Revisar consumos**: verificar los servicios y productos consumidos durante la estadia.
2. **Generar factura**: crear la factura sobre la reserva con subtotal, impuestos y total automaticos.
3. **Registrar pago**: seleccionar el metodo de pago (efectivo, tarjeta de credito, tarjeta de debito o transferencia).

### Mantenimiento

1. **Reportar solicitud**: registrar el fallo sobre una habitacion o salon, indicando tipo, prioridad y descripcion.
2. **Asignar responsable**: vincular el empleado que atendera la solicitud.
3. **Actualizar estado**: mantener el seguimiento hasta pasar a `Finalizado` y registrar la fecha de solucion.

### Inventario

1. **Registrar producto**: crear el producto con su categoria, stock inicial y precio unitario.
2. **Registrar movimiento**: al registrar una entrada o salida, el stock se actualiza automaticamente.
3. **Consultar existencias**: revisar los niveles de stock y los productos por debajo del minimo.
4. **Valorizar bodega**: consultar el valor monetario del inventario disponible.

### Gerencia

1. **Consultar reportes**: revisar indicadores de facturacion, ocupacion de habitaciones, nomina e inventario.
2. **Supervisar operaciones**: analizar el estado de las reservas, estadias y mantenimientos.
3. **Configurar el sistema**: ajustar parametros generales y gestionar usuarios.

---

## Elementos Comunes

| Concepto | Descripcion |
|----------|-------------|
| Estados de reserva | Pendiente, Confirmada, En proceso, Cancelada, Terminada |
| Estados de habitacion y salon | Disponible, Ocupada/ocupado, En mantenimiento |
| Estados de estadia | Activa, Finalizada, Cancelada |
| Metodos de pago | Efectivo, Tarjeta de credito, Tarjeta de debito, Transferencia |
| Cias de mantenimiento | Limpieza, Comodidad, Suministros, Conectividad, Instalaciones, Electricidad, Plomeria, Carpinteria, Pintura, Jardineria |

---

## Vinculos Relacionados

- [Guia de Instalacion](guia-instalacion.md)
- [Alcance del Proyecto](../planificacion/alcance.md)
- [README principal](../../README.md)