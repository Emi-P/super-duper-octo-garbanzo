-- CreateTable
CREATE TABLE "Carrera" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Alumno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "carreraId" INTEGER NOT NULL,
    CONSTRAINT "Alumno_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
