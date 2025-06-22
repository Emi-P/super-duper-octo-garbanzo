import * as service from "../services/alumnoService.js"; // Importar de esta forma para evitar problemas con nombres

export async function getAlumnos(req, res) {
    const data = await service.getAlumnos();
    res.status(200).json(data);
}

export async function getAlumno(req, res) {
    const data = await service.getAlumnoById(parseInt(req.params.id));
    if (!data) {
        return res.status(404).json({ message: "Alumno no encontrado" });
    }
    res.status(200).json(data);
}
export async function crearAlumno(req, res) {
    return res.status(201).json({ message: service.addAlumno(req.body) });
}