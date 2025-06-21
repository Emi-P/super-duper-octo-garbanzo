// src/app.js
import express from 'express';
import cors from 'cors';

// Rutas separadas
import alumnoRoutes from './routes/api/alumno.js';
// import carreraRoutes from './routes/api/carrera.js';
// import materiaRoutes from './routes/api/materia.js';

const app = express();

app.use(cors());
app.use(express.json());

// Registrar rutas
app.use('/api/alumno', alumnoRoutes);
// app.use('/api/carreras', carreraRoutes);
// app.use('/api/materias', materiaRoutes);

// Ruta base opcional
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de progreso académico');
});

export default app;
