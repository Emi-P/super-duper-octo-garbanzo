// src/routes/api/alumno.js
import express from 'express';
import { getAlumno, crearAlumno } from '../../controllers/alumnoController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Endpoint para obtener todos los alumnos' });
})
router.get('/:id', getAlumno);
router.post('/', crearAlumno);

export default router;