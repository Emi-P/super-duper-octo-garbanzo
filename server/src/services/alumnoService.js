import db  from '../../db.json' with { type: 'json' };
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAlumnos(){
    const alumnos = await prisma.alumno.findMany().catch(error => {
        console.error("Error al obtener los alumnos:", error);
        return null;
    });
    return alumnos || [];
}

export async function getAlumnoById(id) {
    return await prisma.alumno.findUnique({
        where: { id: id }
    }) || null;
}

export function addAlumno(alumno) {
    const data = {
        nombre: alumno.nombre,
        carreraId: alumno.carrera,
    }
    return prisma.alumno.create({
        data: data
    }).catch(error => {
        console.error("Error al crear el alumno:", error);
        return "error";
    });
}
