# RoyalStaySystem

> Sistema de gestion hotelera (PMS - Property Management System) cuyo objetivo es automatizar y organizar los procesos mas relevantes dentro de un hotel.

![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-yellow)
![Base de datos](https://img.shields.io/badge/Base%20de%20datos-MySQL%208-blue)
![Modelado](https://img.shields.io/badge/Modelado-Normalizado-brightgreen)

---

## Tabla de Contenidos

1. [Descripcion](#descripcion)
2. [Objetivos](#objetivos)
3. [Modulos del Sistema](#modulos-del-sistema)
4. [Caracteristicas Principales](#caracteristicas-principales)
5. [Tecnologias](#tecnologias)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Base de Datos](#base-de-datos)
8. [Requisitos Previos](#requisitos-previos)
9. [Instalacion](#instalacion)
10. [Uso](#uso)
11. [Documentacion](#documentacion)
12. [Roadmap](#roadmap)
13. [Contribucion](#contribucion)
14. [Licencia](#licencia)
15. [Contacto](#contacto)

---

## Descripcion

RoyalStaySystem es un sistema de gestion hotelera que integra la operacion completa de un establecimiento hotelero en una sola plataforma: recepcion, habitaciones, reservas, facturacion, mantenimiento, inventario y reportes.

El proyecto se concibe como un sistema completo que parte de un modelo de datos solido y normalizado (21 tablas relacionales) sobre el cual se construyen los modulos funcionales de la aplicacion. Cada modulo del esquema de base de datos se corresponde con un area operativa real del hotel, lo que garantiza que la informacion fluya de forma consistente entre todas las areas.

El desarrollo se organiza en tres frentes:

- **Aplicacion**: 14 modulos funcionales para la operacion diaria del hotel.
- **Base de datos**: Modelo relacional normalizado que soporta todos los procesos.
- **Documentacion**: Manual, diagramas y especificaciones del sistema.

---

## Objetivos

- Automatizar los procesos de recepcion, reservacion y facturacion del hotel.
- Gestionar de forma eficiente la disponibilidad de habitaciones y salones de eventos.
- Mantener un control preciso del inventario y sus movimientos.
- Centralizar el registro de clientes, empleados y accesos al sistema.
- Generar reportes operativos y financieros para la toma de decisiones.
- Administrar el mantenimiento preventivo y correctivo de las instalaciones.
- Integrar los servicios adicionales (alimentos, transporte, spa, entre otros) a la facturacion.
- Garantizar la integridad y consistencia de la informacion mediante un modelo de datos normalizado.

---

## Modulos del Sistema

| Modulo | Descripcion |
|--------|-------------|
| clientes | Registro y gestion de clientes, tipos de documento y datos de contacto |
| reservas | Reservacion de habitaciones y salones con control de estados |
| habitaciones | Administracion de habitaciones, tipos, capacidad y disponibilidad |
| salones | Gestion de salones para eventos, capacidad y disponibilidad |
| recepcion | Operaciones de recepcion, check-in y check-out |
| facturacion | Generacion de facturas, impuestos y metodos de pago |
| servicios | Catalogo de servicios adicionales para huespedes |
| inventario | Control de productos, stock y movimientos de entrada y salida |
| mantenimiento | Solicitudes de mantenimiento, tipos, prioridades y seguimiento |
| personal | Administracion de empleados, cargos y salarios |
| seguridad | Autenticacion de usuarios y control de acceso |
| auditoria | Trazabilidad de acciones y cambios en el sistema |
| reportes | Estadisticas operativas y financieras |
| configuracion | Parametrizacion general del sistema |
| compartido | Utilidades y componentes reutilizables entre modulos |

---

## Caracteristicas Principales

- Reservacion de habitaciones y salones con gestion de fechas, estados y costos estimados.
- Check-in y check-out vinculados a estadias y empleados responsables.
- Facturacion con calculo automatico de subtotales, impuestos y totales.
- Registro de consumos de servicios y productos asociados a cada reserva.
- Control de inventario con actualizacion automatica de stock mediante disparadores (triggers).
- Sistema de mantenimiento con tipos, prioridades y seguimiento de estado.
- Autenticacion de usuarios con credenciales cifradas.
- Modelo de datos con restricciones de integridad referencial y columnas calculadas.

---

## Tecnologias

| Capa | Tecnologia |
|------|------------|
| Base de datos | MySQL 8.0+ |
| Modelado de datos | Diagrama entidad-relacion y normalizacion |
| Lenguaje de programacion | Pendiente de definir |
| Framework | Pendiente de definir |
| Frontend | Pendiente de definir |
| Control de versiones | Git y GitHub |

---

## Estructura del Proyecto

```
RoyalStaySystem/
├── src/
│   ├── auditoria/          # Modulo de auditoria
│   ├── clientes/           # Gestion de clientes
│   ├── compartido/         # Utilidades compartidas
│   ├── configuracion/      # Parametrizacion del sistema
│   ├── facturacion/        # Modulo de facturacion
│   ├── habitaciones/       # Gestion de habitaciones
│   ├── inventario/         # Control de inventario
│   ├── mantenimiento/      # Solicitudes de mantenimiento
│   ├── personal/           # Administracion de personal
│   ├── reportes/           # Reportes y estadisticas
│   ├── reservas/           # Sistema de reservas
│   ├── salones/            # Gestion de salones
│   ├── seguridad/          # Autenticacion y accesos
│   └── servicios/          # Catalogo de servicios
├── database/
│   ├── scripts/            # Scripts SQL del esquema
│   ├── migrations/         # Migraciones estructura
│   ├── seeds/              # Datos semilla de prueba
│   └── backups/            # Respaldo de datos
├── docs/
│   ├── api/                # Documentacion de la API
│   ├── er/                 # Diagramas entidad-relacion
│   ├── manual/             # Manual de usuario
│   └── planificacion/      # Documentos de planificacion
├── tests/
│   ├── unit/               # Pruebas unitarias
│   ├── integration/        # Pruebas de integracion
│   └── e2e/                # Pruebas de extremo a extremo
└── README.md
```

---

## Base de Datos

La base de datos es el cimiento del sistema. Esta diseñada a partir de un modelo entidad-relacion normalizado y contiene 21 tablas organizadas en cinco areas.

- **Base de datos**: `bd_hotel_system_pms`
- **Motor**: MySQL 8.0+
- **Tablas**: 21
- **Esquema**: `database/scripts/database.sql`
- **Datos de prueba**: `database/seeds/`

### Areas del Modelo

| Area | Tablas |
|------|--------|
| Referencia | tipo_documento, cargo, tipo_mantenimiento, categoria_servicio, categoria_producto |
| Negocio | cliente, empleado, usuario, habitacion, salon |
| Transaccional | reserva, reserva_habitacion, reserva_salon, estadia, servicio, inventario, consumo, movimiento |
| Financiera | factura, detalle_factura |
| Operativa | mantenimiento |

### Elementos del Modelo

- **Disparador `tg_actualizar_stock`**: actualiza automaticamente el stock del inventario al registrar movimientos de entrada o salida.
- **Columnas calculadas**: campos generados automaticamente (`GENERATED ALWAYS AS ... STORED`) como subtotales, totales y tiempos de uso.
- **Restricciones de integridad**: claves foraneas y check constraints que validan estados y reglas de negocio.
- **Relaciones opcionales**: consumos pueden referenciar servicios o productos; el mantenimiento puede aplicarse a habitaciones o salones.

---

## Requisitos Previos

- MySQL 8.0 o superior.
- Git para el control de versiones.
- Entorno de ejecucion segun el stack de desarrollo definido.

---

## Instalacion

### 1. Clonar el repositorio

```bash
git clone https://github.com/jmartinezsys/RoyalStaySystem.git
cd RoyalStaySystem
```

### 2. Crear la base de datos

Ejecutar el script del esquema para crear la base de datos, las tablas y las restricciones:

```bash
mysql -u <usuario> -p < database/scripts/database.sql
```

### 3. Cargar los datos de prueba

Ejecutar el script de datos semilla para poblar la base de datos con informacion de ejemplo:

```bash
mysql -u <usuario> -p < database/seeds/
```

### 4. Configurar el entorno

Crear el archivo de configuracion de acuerdo con el entorno de desarrollo y establecer los parametros de conexion a la base de datos.

### 5. Ejecutar la aplicacion

Iniciar la aplicacion siguiendo las instrucciones del manual de instalacion en `docs/manual/`.

---

## Uso

La plataforma esta pensada para los distintos roles que operan en un hotel:

- **Recepcion**: registra clientes, gestiona reservas y realiza check-in y check-out.
- **Facturacion**: genera facturas sobre los consumos y reservas de cada cliente.
- **Mantenimiento**: reporta y da seguimiento a las solicitudes sobre habitaciones y salones.
- **Inventario**: registra productos y controla entradas y salidas del stock.
- **Gerencia**: consulta reportes y estadisticas del negocio.

---

## Documentacion

La documentacion del proyecto se encuentra en la carpeta `docs/`:

| Carpeta | Contenido |
|---------|-----------|
| `docs/api` | Documentacion tecnica de la API y endpoints |
| `docs/er` | Diagramas entidad-relacion (conceptual y fisico) |
| `docs/manual` | Manual de usuario e instalacion |
| `docs/planificacion` | Planificacion y alcance del proyecto |

---

## Roadmap

- [ ] Definir el stack tecnologico de la aplicacion.
- [ ] Implementar la capa de acceso a datos.
- [ ] Desarrollar los modulos funcionales priorizados.
- [ ] Construir el modulo de autenticacion y control de acceso.
- [ ] Implementar el modulo de reportes y estadisticas.
- [ ] Cubrir los modulos con pruebas unitarias, de integracion y de extremo a extremo.
- [ ] Publicar la documentacion de la API.

---

## Contribucion

1. Crea una rama a partir de `main` para tu aporte.
2. Realiza los cambios y asegurate de que el codigo siga las convenciones del proyecto.
3. Ejecuta las pruebas correspondientes antes de enviar los cambios.
4. Abre un pull request con una descripcion clara de lo que se implementa o corrige.

---

## Licencia

Este proyecto se encuentra en desarrollo. La licencia sera definida en una etapa posterior.

---

## Contacto

Autor: Jorge M. Castillo

Correo: jorge.martinezc2846@gmail.com

Repositorio: https://github.com/jmartinezsys/RoyalStaySystem