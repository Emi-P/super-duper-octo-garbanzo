# Abstract
Crear una webapp para poder mostrar el avance en las carreras de famaf de forma grafica, con un frontend lindo.
Un usuario puede dejar guardado su progreso. Consultarlo despues y actualizarlo.
En principio se va a guardar los datos de usuario en localstorage, proximamente sistema de users con login,etc.

# Stack
Node.js
    Express para la API.
    Prisma, si algun dia implemento la BD

Vue.js

PostgreSQL

# Objetos en la BD
```
Carrera
    id
    nombre
    materias (1:M)

Materia
    nombre
    carreras (1:M)

Alumno
    nombre
    materias_aprobadas (1:M)
    carrera(1:1)
    porcentaje_avance
    materias_en_curso (1:M)
```
# Nombres de carreras (Como para no cambiarlos sin querer) - Número asoc.
    "Licenciatura en ciencias de la computación" - 1
    "Licenciatura en física"                     - 2



# Material para aprender
https://www.youtube.com/watch?v=9BD9eK9VqXA