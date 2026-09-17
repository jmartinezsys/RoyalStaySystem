const jwt = require('jsonwebtoken');
const { query } = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET;

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token de acceso requerido' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await query(
      'SELECT id_usuario, id_empleado, username FROM usuario WHERE id_usuario = ?',
      [decoded.id],
    );
    if (!user || user.length === 0) {
      return res.status(403).json({ message: 'Usuario no válido' });
    }
    req.user = user[0];
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
}

function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: 'Sin permisos suficientes' });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }
    next();
  };
}

module.exports = { authenticateToken, authorizeRoles };
