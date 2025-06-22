import db  from '../../db.json' with { type: 'json' };

export function getAlumnoById(id) {
    return db.alumnos.find(alumno => alumno.id === id) || null;
}

export function addAlumno(alumno) {
    const newId = db.alumnos.length > 0 ? Math.max(...db.alumnos.map(a => a.id)) + 1 : 1;
    const newAlumno = { id: newId, ...alumno };
    db.alumnos.push(newAlumno);
    return newAlumno;
}
