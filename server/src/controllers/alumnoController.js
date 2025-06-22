import { getAlumnoById } from "../services/alumnoService.js";

export async function getAlumno(req, res) {
    const data = getAlumnoById(parseInt(req.params.id));
    if (!data) {
        return res.status(404).json({ message: "Alumno no encontrado" });
    }
    res.status(200).json(data);
}
export async function crearAlumno(req, res) {
    res.status(201).json({
        message: "Endpoint para crear un nuevo alumno",
        data: req.body
    });
}