class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

function notFound(req, res, next) {
  const error = new AppError(`Ruta no encontrada: ${req.originalUrl}`, 404);
  next(error);
}

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  console.error(`[ERROR] ${req.method} ${req.originalUrl} - ${statusCode}: ${message}`);

  res.status(statusCode).json({
    status: err.status || 'error',
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}

module.exports = { AppError, notFound, errorHandler };
