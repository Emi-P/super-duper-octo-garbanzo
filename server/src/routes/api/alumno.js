// src/routes/api/alumno.js
import express from 'express';
import { getAlumnos, getAlumno, crearAlumno } from '../../controllers/alumnoController.js';

const router = express.Router();

router.get('/', getAlumnos)
router.get('/:id', getAlumno);
router.post('/', crearAlumno);

export default router;