import random

nombres = [
    "Ana", "Luis", "María", "Carlos", "Laura",
    "José", "Isabel", "David", "Patricia", "Javier",
]

materias = [1,2,3,4]
carreras = [1,2]

data = "\"alumnos:\" [\n"
for i in range(1, 10):
    data += "   {  \n"
    data += f'      "id": {i},\n'
    data += f'      "nombre": "{nombres[i-1]}",\n'
    data += f'      "carrera": {random.choice(carreras)},\n'
    data += f'      "materias_aprobadas": {random.choices(materias,k=random.randint(1,3))},\n'
    data += f'      "materias_en_curso": [{random.randint(1,3)}],\n'
    data += "   },\n"

data += "]"

print(data)