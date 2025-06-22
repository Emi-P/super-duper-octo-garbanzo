import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const compu = await prisma.carrera.upsert({
    where: { id: 1 },
    update: {
        nombre: "Licenciatura en Ciencias de la Computación",
    },
    create: {
        id: 1,
        nombre: "Licenciatura en Ciencias de la Computación",
    },
  })

  const fisica = await prisma.carrera.upsert({
    where: { id: 2 },
    update: {
        nombre: "Licenciatura en Física",
    },
    create: {
        id: 2,
        nombre: "Licenciatura en Física",
    },
  })
  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })