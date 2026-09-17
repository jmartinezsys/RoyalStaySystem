# Consultas SQL

Catalogo de las 20 consultas SQL definidas para el sistema sobre la base de datos `bd_hotel_system_pms`, organizadas por categoria de complejidad.

> Los scripts fuente se encuentran en `database/scripts/`.

## Tabla de Contenidos

- [Categoria 1: Consultas Basicas](#categoria-1-consultas-basicas)
- [Categoria 2: Funciones Agregadas](#categoria-2-funciones-agregadas)
- [Categoria 3: Agrupaciones de Registro](#categoria-3-agrupaciones-de-registro)
- [Categoria 4: Subconsultas](#categoria-4-subconsultas)

---

## Categoria 1: Consultas Basicas

Consultas directas con filtros, uniones y ordenamientos.

### 1. Suites con precio superior a $400,000

Lista las habitaciones de tipo Suite Ejecutiva o Suite Presidencial con precio por noche superior a $400,000, de la mas cara a la mas barata.

```sql
select ha.tipo, rha.precio_noche
from habitacion ha
inner join reserva_habitacion rha on ha.id_habitacion=rha.id_habitacion
where ha.tipo like 'Suite%' and rha.precio_noche > 400000
order by 2 desc;
```

### 2. Clientes extranjeros con correo

Muestra los clientes extranjeros (nacionalidad diferente a Colombiana) con correo electronico registrado.

```sql
select cl.nombres_c, cl.apellidos_c, cl.nacionalidad
from cliente cl
where cl.nacionalidad != 'Colombiana' and cl.email_c is not null;
```

### 3. Empleados contratados en 2024 con su cargo

Lista los empleados contratados en el anio 2024 junto al nombre de su cargo.

```sql
select emp.nombres_e, emp.apellidos_e, c.nombre
from empleado emp
inner join cargo c on emp.id_cargo=c.id_cargo
where emp.fecha_contratacion like '2024%';
```

### 4. Mantenimientos pendientes de habitaciones

Lista las solicitudes de mantenimiento pendientes con numero de habitacion, descripcion y prioridad, de mayor a menor prioridad.

```sql
select ma.id_habitacion as numero, ma.descripcion, tip_m.prioridad
from tipo_mantenimiento tip_m
inner join mantenimiento ma on ma.id_tipo=tip_m.id_tipo
where estado = 'Pendiente' and ma.id_habitacion is not null
order by 3 desc;
```

### 5. Productos con stock bajo 50 unidades

Muestra los productos con existencias inferiores a 50 unidades, su categoria y stock, de mayor a menor cantidad.

```sql
select inv.nombre, cat_p.nombre, inv.stock
from categoria_producto cat_p
inner join inventario inv on inv.id_categoria=cat_p.id_categoria
where inv.stock < 50
order by 3 desc;
```

---

## Categoria 2: Funciones Agregadas

Consultas con funciones de agregacion (SUM, AVG, MIN, COUNT).

### 6. Total acumulado de facturas por cliente

Muestra tipo de documento, numero de documento, nombre del cliente y total acumulado de sus facturas.

```sql
select tip_d.abreviatura, cl.numero_documento, cl.nombres_c, cl.apellidos_c, sum(f.total) as total_acumulado
from tipo_documento tip_d
inner join cliente cl on tip_d.id_tipo_documento=cl.id_tipo_documento
inner join reserva r on r.id_cliente=cl.id_cliente
inner join factura f on f.id_reserva=r.id_reserva
group by tip_d.abreviatura, cl.numero_documento, cl.nombres_c, cl.apellidos_c
order by  cl.nombres_c, cl.apellidos_c;
```

### 7. Gasto total de nomina por cargo

Muestra los cargos con empleados asignados y el gasto total de nomina por cada cargo.

```sql
select c.nombre, sum(emp.salario) as total_nomina_cargo
from cargo c
inner join empleado emp on c.id_cargo=emp.id_cargo
group by c.nombre
order by 2 desc;
```

### 8. Stock total por categoria con movimientos

Muestra las categorias de productos que han tenido movimientos de inventario y su stock total.

```sql
select cat_p.nombre as categoria, sum(inv.stock) as total_stock
from categoria_producto cat_p
inner join inventario inv on inv.id_categoria=cat_p.id_categoria
inner join movimiento m on m.id_producto=inv.id_producto
group by cat_p.nombre
order by cat_p.nombre;
```

### 9. Analisis de nomina por cargo activo

Para cada cargo con dos o mas empleados, muestra cantidad, salario promedio, minimo y costo total de nomina.

```sql
select c.nombre, count(emp.id_empleado) as empleados_activos, avg(emp.salario) as promedio, min(emp.salario) as salario_base, sum(emp.salario) as costo_total_nomina
from cargo c
inner join empleado emp on emp.id_cargo=c.id_cargo
group by c.nombre
having empleados_activos >= 2
order by empleados_activos desc;
```

### 10. Valorizacion de bodega por categoria

Calcula el valor total de la mercancia en stock (stock x precio unitario) por categoria.

```sql
select cat_p.nombre as categoria, count(inv.id_producto) as tipo_producto, sum(inv.stock) as unidades_totales, sum(inv.stock * inv.precio_unitario) as valor_monetario
from categoria_producto cat_p
inner join inventario inv on inv.id_categoria=cat_p.id_categoria
group by cat_p.nombre
order by tipo_producto;
```

---

## Categoria 3: Agrupaciones de Registro

Consultas con agrupaciones multiples y clausula HAVING.

### 11. Resumen de facturacion por metodo de pago

Muestra transacciones, subtotal acumulado, impuestos y total recaudado por metodo de pago.

```sql
select f.metodo_pago, count(*) as transacciones, sum(f.subtotal) as base_iva, sum(f.impuestos) as total_impuestos, sum(f.total) as total_recaudado
from factura f
group by f.metodo_pago
order by total_recaudado desc;
```

### 12. Rendimiento de reservas por tipo de habitacion y estado

Muestra el tipo de habitacion, estado y cantidad de reservas asociadas.

```sql
select hab.tipo, r.estado, count(r.id_reserva) as cantidad_reservas
from habitacion hab
inner join reserva_habitacion res_h on hab.id_habitacion=res_h.id_habitacion
inner join reserva r on r.id_reserva=res_h.id_reserva
group by hab.tipo, r.estado
order by cantidad_reservas;
```

### 13. Productos gestionados por empleado en inventario

Muestra empleado, cargo y numero de productos distintos que ha movido.

```sql
select emp.nombres_e, emp.apellidos_e, c.nombre, count(distinct m.id_producto) as productos_gestionados
from cargo c
inner join empleado emp on emp.id_cargo=c.id_cargo
inner join movimiento m on m.id_empleado=emp.id_empleado
group by emp.nombres_e, emp.apellidos_e, c.nombre
order by productos_gestionados desc;
```

### 14. Promedio de costo de reservas por nacionalidad

Muestra la nacionalidad y el promedio de ingresos estimados de sus reservas.

```sql
select cl.nacionalidad, avg(r.costo_estimado) as promedio
from reserva r
inner join cliente cl on cl.id_cliente=r.id_cliente
group by cl.nacionalidad
order by 2;
```

### 15. Distribucion de facturacion por genero y metodo de pago

Muestra sexo del cliente, metodo de pago y suma total facturada.

```sql
select cl.sexo_c, f.metodo_pago, sum(f.total) as total
from cliente cl
inner join reserva r on r.id_cliente=cl.id_cliente
inner join factura f on f.id_reserva=r.id_reserva
group by cl.sexo_c, f.metodo_pago;
```

---

## Categoria 4: Subconsultas

Consultas con subconsultas y consultas anidadas.

### 16. Clientes internacionales que pagan por encima del promedio

Clientes extranjeros con facturas superiores al promedio general de facturacion.

```sql
select cl.nombres_c, cl.apellidos_c, cl.nacionalidad
from cliente cl
where cl.nacionalidad != 'Colombiana' and cl.id_cliente in (
	select r.id_cliente
    from reserva r
    inner join factura f on r.id_reserva=f.id_reserva
    where f.total > (
		select avg(f.total)
        from factura f
    )
);
```

### 17. Producto de alimentos con mas salidas

Producto de la categoria Alimentos con mas movimientos de salida.

```sql
select inv.nombre, sum(m.cantidad) as total_salidas
from categoria_producto cat_p
inner join inventario inv on cat_p.id_categoria=inv.id_categoria
inner join movimiento m on inv.id_producto=m.id_producto
where cat_p.nombre like 'Alimentos%' and m.tipo = 'Salida'
group by inv.nombre
having sum(m.cantidad) = (
	select max(t.total)
    from (
		select sum(m.cantidad) as total
		from categoria_producto cat_p
		inner join inventario inv on cat_p.id_categoria=inv.id_categoria
		inner join movimiento m on inv.id_producto=m.id_producto
		where cat_p.nombre like 'Alimentos%' and m.tipo = 'Salida'
		group by inv.id_producto
    ) as t
);
```

### 18. Servicio con mayor recaudacion de impuestos en tarjeta

Servicio que ha generado la mayor suma de impuestos en facturas pagadas con tarjeta.

```sql
select cat_s.nombre, s.nombre, sum(f.impuestos) as impuestos_recaudados
from categoria_servicio cat_s
inner join servicio s on cat_s.id_categoria=s.id_categoria
inner join consumo c on c.id_servicio=s.id_servicio
inner join detalle_factura det_f on det_f.id_consumo=c.id_consumo
inner join factura f on det_f.id_factura=f.id_factura
where f.metodo_pago like 'Tarjeta%'
group by cat_s.nombre, s.nombre
having sum(f.impuestos) = (
	select max(t.impuestos)
    from (
		select sum(f.impuestos) as impuestos
		from categoria_servicio cat_s
		inner join servicio s on cat_s.id_categoria=s.id_categoria
		inner join consumo c on c.id_servicio=s.id_servicio
		inner join detalle_factura det_f on det_f.id_consumo=c.id_consumo
		inner join factura f on det_f.id_factura=f.id_factura
		where f.metodo_pago like 'Tarjeta%'
		group by cat_s.nombre, s.nombre
    ) as t
);
```

### 19. Productos de limpieza con el precio unitario mas alto

Productos de la categoria Limpieza con el precio unitario maximo de su categoria.

```sql
select cat_p.nombre, inv.nombre, inv.precio_unitario
from categoria_producto cat_p
inner join inventario inv on inv.id_categoria=cat_p.id_categoria
where cat_p.nombre like 'Limpieza'
group by cat_p.nombre, inv.nombre, inv.precio_unitario
having inv.precio_unitario = (
	select max(t.precio)
    from (
		select inv.precio_unitario as precio
		from categoria_producto cat_p
		inner join inventario inv on inv.id_categoria=cat_p.id_categoria
		where cat_p.nombre = 'Limpieza'
        group by cat_p.nombre, inv.nombre, inv.precio_unitario
	) as t
);
```

### 20. Anio con mas ingresos de recepcionistas

Anio de contratacion en el que ingresaron mas empleados con cargo Recepcionista.

```sql
select year(emp.fecha_contratacion) as fecha_contratacion, count(emp.id_empleado) as ingresos
from empleado emp
inner join cargo c on c.id_cargo=emp.id_cargo
where c.nombre = 'Recepcionista'
group by year(emp.fecha_contratacion)
having count(emp.id_empleado) = (
	select max(t.ingresos)
    from (
		select count(emp.id_empleado) as ingresos
		from empleado emp
		inner join cargo c on c.id_cargo=emp.id_cargo
		where c.nombre = 'Recepcionista'
		group by year(emp.fecha_contratacion)
    ) as t
);
```

---

## Vinculos Relacionados

- [Diccionario de Datos](er/diccionario-datos.md)
- [Modelo de Datos](er/modelo-datos.md)
- [README principal](README.md)