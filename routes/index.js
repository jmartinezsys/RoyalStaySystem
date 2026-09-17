const { Router } = require('express');
const router = Router();

const clientesRoutes = require('../src/clientes/routes');
const personalRoutes = require('../src/personal/routes');
const seguridadRoutes = require('../src/seguridad/routes');
const habitacionesRoutes = require('../src/habitaciones/routes');
const salonesRoutes = require('../src/salones/routes');
const reservasRoutes = require('../src/reservas/routes');
const serviciosRoutes = require('../src/servicios/routes');
const inventarioRoutes = require('../src/inventario/routes');
const mantenimientoRoutes = require('../src/mantenimiento/routes');
const facturacionRoutes = require('../src/facturacion/routes');
const reportesRoutes = require('../src/reportes/routes');
const auditoriaRoutes = require('../src/auditoria/routes');
const configuracionRoutes = require('../src/configuracion/routes');
const compartidoRoutes = require('../src/compartido/routes');

router.use('/clientes', clientesRoutes);
router.use('/personal', personalRoutes);
router.use('/seguridad', seguridadRoutes);
router.use('/habitaciones', habitacionesRoutes);
router.use('/salones', salonesRoutes);
router.use('/reservas', reservasRoutes);
router.use('/servicios', serviciosRoutes);
router.use('/inventario', inventarioRoutes);
router.use('/mantenimiento', mantenimientoRoutes);
router.use('/facturacion', facturacionRoutes);
router.use('/reportes', reportesRoutes);
router.use('/auditoria', auditoriaRoutes);
router.use('/configuracion', configuracionRoutes);
router.use('/compartido', compartidoRoutes);

module.exports = router;
