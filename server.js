require('dotenv').config();

const app = require('./app');
const { connectDB } = require('./config/database');

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`RoyalStaySystem corriendo en puerto ${PORT}`);
    console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
  });
}

start().catch((error) => {
  console.error('No se pudo iniciar el servidor:', error.message);
  process.exit(1);
});

module.exports = app;
