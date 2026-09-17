# Guia de Instalacion

Pasos para instalar y ejecutar RoyalStaySystem en un entorno de desarrollo.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [1. Clonar el Repositorio](#1-clonar-el-repositorio)
- [2. Instalar Dependencias](#2-instalar-dependencias)
- [3. Configurar Variables de Entorno](#3-configurar-variables-de-entorno)
- [4. Crear la Base de Datos](#4-crear-la-base-de-datos)
- [5. Cargar Datos de Prueba](#5-cargar-datos-de-prueba)
- [6. Iniciar el Servidor](#6-iniciar-el-servidor)
- [Solucion de Problemas](#solucion-de-problemas)

---

## Requisitos Previos

| Herramienta | Version minima | Verificar |
|-------------|----------------|-----------|
| Node.js | 18 o superior | `node -v` |
| npm | 9 o superior | `npm -v` |
| MySQL | 8.0 | `mysql --version` |
| Git | cualquiera | `git --version` |

---

## 1. Clonar el Repositorio

```bash
git clone https://github.com/jmartinezsys/RoyalStaySystem.git
cd RoyalStaySystem
```

---

## 2. Instalar Dependencias

```bash
npm install
```

Este comando instala todas las dependencias declaradas en `package.json`.

---

## 3. Configurar Variables de Entorno

Crear el archivo de configuracion a partir de la plantilla:

```bash
cp .env.example .env
```

Las variables principales son:

| Variable | Descripcion |
|----------|-------------|
| DB_HOST | Servidor de la base de datos (por defecto `localhost`) |
| DB_PORT | Puerto de MySQL (por defecto `3306`) |
| DB_USER | Usuario de la base de datos |
| DB_PASSWORD | Contrasena del usuario |
| DB_NAME | Nombre de la base de datos (`bd_hotel_system_pms`) |
| JWT_SECRET | Clave secreta para firmar los tokens JWT |
| PORT | Puerto del servidor HTTP |

---

## 4. Crear la Base de Datos

Ejecutar el script del esquema para crear la base de datos, las tablas y las restricciones:

```bash
mysql -u <usuario> -p < database/scripts/database.sql
```

El sistema solicitara la contrasena del usuario de MySQL. Al finalizar se crea la base de datos `bd_hotel_system_pms` con las 21 tablas del sistema, sus claves, restricciones y el disparador `tg_actualizar_stock`.

---

## 5. Cargar Datos de Prueba

Poblar la base de datos con informacion de ejemplo:

```bash
mysql -u <usuario> -p < database/seeds/
```

Los datos semilla incluyen clientes de distintas nacionalidades, empleados con cargos, 15 habitaciones, 12 salones, 20 reservas, consumos, movimientos de inventario y 4 facturas, entre otros.

---

## 6. Iniciar el Servidor

Modo de desarrollo (con recarga automatica):

```bash
npm run dev
```

Modo de produccion:

```bash
npm start
```

El servidor queda disponible en la URL y puerto configurados (por defecto `http://localhost:3000`).

---

## Solucion de Problemas

| Problema | Causa probable | Solucion |
|----------|----------------|----------|
| Error de conexion a la base de datos | Variables de entorno incorrectas | Verificar DB_HOST, DB_PORT, DB_USER, DB_PASSWORD y DB_NAME en `.env` |
| Tabla o base de datos no encontrada | No se ejecutaron los scripts SQL | Ejecutar los pasos 4 y 5 |
| Puerto en uso | Otra aplicacion usando el puerto | Cambiar `PORT` en `.env` |
| Token invalido o expirado | `JWT_SECRET` cambiado entre reinicios | Mantener un `JWT_SECRET` fijo |

---

## Vinculos Relacionados

- [Manual de Usuario](manual-usuario.md)
- [Documentacion de la API](../api/documentacion-api.md)
- [README principal](../../README.md)