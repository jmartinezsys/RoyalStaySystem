# Modelo de Datos

Descripcion del modelo entidad-relacion del sistema, las areas del esquema `bd_hotel_system_pms` y los elementos que garantizan la integridad de la informacion.

## Tabla de Contenidos

- [Vista General](#vista-general)
- [Areas del Modelo](#areas-del-modelo)
- [Diagrama de Relaciones](#diagrama-de-relaciones)
- [Elementos del Modelo](#elementos-del-modelo)
- [Reglas de Negocio](#reglas-de-negocio)

---

## Vista General

El sistema se apoya en una base de datos relacional normalizada de 21 tablas. La informacion se estructura en tablas de referencia (catalogos), tablas de negocio (entidades principales), tablas transaccionales (operaciones), tablas financieras (facturacion) y una tabla operativa (mantenimiento).

El modelo garantiza la coherencia entre las areas del hotel: una reserva une a un cliente con habitaciones o salones, genera estadias, registra consumos y finalmente produce facturas.

---

## Areas del Modelo

| Area | Tablas | Proposito |
|------|--------|-----------|
| Referencia | tipo_documento, cargo, tipo_mantenimiento, categoria_servicio, categoria_producto | Catalogos base que alimentan los formularios del sistema |
| Negocio | cliente, empleado, usuario, habitacion, salon | Entidades principales del dominio hotelero |
| Transaccional | reserva, reserva_habitacion, reserva_salon, estadia, servicio, inventario, consumo, movimiento | Registro de las operaciones que ocurren a diario |
| Financiera | factura, detalle_factura | Emision de facturas y su desglose |
| Operativa | mantenimiento | Gestion de las solicitudes de mantenimiento |

---

## Diagrama de Relaciones

```
                            tipo_documento
                                  |
                                  | 1:N
                                  v
                             +--------+
                             | cliente|----+
                             +--------+    |
                                  ^        |
                                  |        |
                                  | 1:N    | 1:N
                                  |        |
                            +-----------+  |
                            |  reserva  |--+  (id_cliente, id_empleado)
                            +-----------+
                             |         |
                             | 1:N     | 1:N
                             v         v
                     +------------+  +----------+
                     |reserva_    |  |reserva_  |
                     |habitacion  |  |salon     |
                     +------------+  +----------+
                          |  N:1          | N:1
                          v               v
                     +----------+      +--------+
                     |habitacion|      | salon  |
                     +----------+      +--------+

                     reserva 1:N estadia
                     reserva 1:N consumo (servicio | inventario)
                     inventario 1:N movimiento (empleado 1:N)
                     reserva 1:N factura (empleado 1:N)
                     factura 1:N detalle_factura
                     tipo_mantenimiento 1:N mantenimiento
                     habitacion 1:N mantenimiento, salon 1:N mantenimiento
```

---

## Elementos del Modelo

### Disparador (Trigger)

**`tg_actualizar_stock`**: disparado despues de cada insercion en `movimiento`.

- Si el tipo es `Entrada`, suma la cantidad al stock del producto.
- Si el tipo es `Salida`, resta la cantidad al stock del producto.

Este disparador garantiza que el inventario se mantenga consistente sin logica adicional en la aplicacion.

### Columnas Calculadas

Campos generados automaticamente por el motor con `GENERATED ALWAYS AS ... STORED`:

| Tabla | Columna | Calculo |
|-------|---------|---------|
| reserva_salon | tiempo_uso | Diferencia en horas entre salida y entrada |
| factura | total | subtotal + impuestos |
| detalle_factura | subtotal | cantidad x precio_unitario |

### Restricciones de Integridad

- **Check constraints** en campos de estado: habitacion, salon, reserva, estadia, factura, movimiento y mantenimiento.
- **Claves foraneas** que garantizan la integridad referencial entre tablas.
- **Claves unicas** compuestas para evitar duplicados en las relaciones reserva-habitacion y reserva-salon.

### Relaciones Opcionales

- **consumo**: debe referenciar un servicio o un producto, nunca ambos ni ninguno.
- **mantenimiento**: puede aplicarse a una habitacion o a un salon (campos opcionales).
- **detalle_factura**: debe referenciar un consumo, una reserva de habitacion o una reserva de salon.

---

## Reglas de Negocio

- Un cliente debe tener telefono o correo electronico registrado.
- El sexo de un cliente puede ser M, F o E (empresa). El sexo de un empleado solo M o F.
- El stock nunca puede ser negativo.
- Los estados de cada entidad solo aceptan los valores definidos (ver diccionario de datos).
- Los metodos de pago aceptados son: Efectivo, Tarjeta credito, Tarjeta debito y Transferencia.
- Solo los empleados con cargos de gestion (gerentes, recepcionistas y contadores) cuentan con usuario de acceso en los datos semilla.

---

## Vinculos Relacionados

- [Diccionario de Datos](diccionario-datos.md)
- [Consultas SQL](../consultas-sql.md)
- [README principal](../../README.md)