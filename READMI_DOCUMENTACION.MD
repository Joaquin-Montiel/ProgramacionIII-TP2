Documentacion API Vinilos:

Esta API permite gestionar un catálogo de vinilos y sus artistas asociados. Incluye funcionalidades de filtrado, ordenamiento, y paginación para los vinilos, además de la gestión completa de los artistas.

# El stack tecnologico usado fue:
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Postman

1. Instalar dependencioas con: npm install.
2. Configurar la base de datos en el archivo data/db.js.
3. Ejecutar la sincronizacion: db.sync({ force: false });
4. Iniciar el servidor: node index.js.
El servidor estará disponible en http://localhost:3000.

En data, hay un set de albunes de vinilos y uno de artistas ambos de tipo JSON, con los que estuve trabajando en las tablas.

Endpoints:
Vinilos(Para el CRUD utilice Postman)
Rutas para gestionar vinilos.

1. Obtener todos los vinilos (GET): 
GET: http://localhost:3000/api/vinilos
Parámetros de Query:
-page (número): Número de página para la paginación.
-limit (número): Cantidad de registros por página.
-sort (texto): Ordenamiento (ASC o DESC).
-genero (texto): Filtrar por género.
-status (texto): Filtrar por estado (ejemplo: activo/inactivo).
Ejemplo: La consulta devuelve todos los vinilos cargados en la base de datos.
{
    "total": 3,
    "page": 1,
    "totalPages": 1,
    "data": [
        {
            "id": 1,
            "titulo": "Abbey Road",
            "genero": "Rock",
            "añoLanzamiento": 1969,
            "descripcion": "El undécimo álbum de estudio de The Beatles, considerado una obra maestra.",
            "precio": "35.99",
            "id_artista": null,
            "createdAt": "2024-11-26T05:29:27.000Z",
            "updatedAt": "2024-11-26T05:29:27.000Z"
        },
        {
            "id": 2,
            "titulo": "The Dark Side of the Moon",
            "genero": "Rock Progresivo",
            "añoLanzamiento": 1973,
            "descripcion": "Un álbum conceptual que explora temas como el paso del tiempo y la locura.",
            "precio": "42.50",
            "id_artista": null,
            "createdAt": "2024-11-26T05:31:50.000Z",
            "updatedAt": "2024-11-26T05:31:50.000Z"
        },
        {
            "id": 3,
            "titulo": "Kind of Blue",
            "genero": "Jazz",
            "añoLanzamiento": 1959,
            "descripcion": "Un hito en la historia del jazz y uno de los álbumes más influyentes del género.",
            "precio": "30.00",
            "id_artista": null,
            "createdAt": "2024-11-26T05:32:12.000Z",
            "updatedAt": "2024-11-26T05:32:12.000Z"
        }
    ]
}


2. Crear un vinilo (POST): 
POST: http://localhost:3000/api/vinilos
Seleccionar Body, raw y JSON:
Ejemplo:
Post : Y escribir en el body lo necesario para cargar el vinilo.
{
  "titulo": "Abbey Road",
  "genero": "Rock",
  "añoLanzamiento": 1969,
  "descripcion": "El undécimo álbum de estudio de The Beatles, considerado una obra maestra.",
  "precio": 35.99
}
Respuesta de ejemplo:
{
  "createdAt": "2024-11-26T05:29:27.778Z",
  "updatedAt": "2024-11-26T05:29:27.780Z",
  "id": 1,
  "titulo": "Abbey Road",
  "genero": "Rock",
  "añoLanzamiento": 1969,
  "descripcion": "El undécimo álbum de estudio de The Beatles, considerado una obra maestra.",
  "precio": 35.99
}

3. Obtener un vinilo por ID (GET):
-id(número): ID del vinilo a consultar.
Ejemplo: GET: http://localhost:3000/api/vinilos/2
Devuelve el vinilo que se encuentra en el ID 2:
{
    "id": 2,
    "titulo": "The Dark Side of the Moon",
    "genero": "Rock Progresivo",
    "añoLanzamiento": 1973,
    "descripcion": "Un álbum conceptual que explora temas como el paso del tiempo y la locura.",
    "precio": "42.50",
    "id_artista": null,
    "createdAt": "2024-11-26T05:31:50.000Z",
    "updatedAt": "2024-11-26T05:31:50.000Z"
}

4. Actualizar un vinilo (PUT): 
PUT: http://localhost:3000/api/vinilos/4
Ejemplo: Vinilo a actualizar
{
    "id": 4,
    "titulo": "Thriller",
    "genero": "Pop",
    "añoLanzamiento": 1982,
    "descripcion": "El álbum más vendido de todos los tiempos, con una mezcla de pop, funk y rock.",
    "precio": "45.00",
    "id_artista": null,
    "createdAt": "2024-11-26T05:37:08.000Z",
    "updatedAt": "2024-11-26T05:37:08.000Z"
}
Respuesta de ejemplo:
{
    "id": 4,
    "titulo": "Thriller",
    "genero": "Pop",
    "añoLanzamiento": 1982,
    "descripcion": "El álbum más vendido de todos los tiempos, con una mezcla de pop, funk y rock.",
    "precio": "80.00",
    "id_artista": null,
    "createdAt": "2024-11-26T05:37:08.000Z",
    "updatedAt": "2024-11-26T05:39:58.628Z"
}


5. Eliminar un vinilo (DELETE): 
DELETE: http://localhost:3000/api/vinilos/6
En este ejemplo eliminariamos el siguiente vinilo:
{
    "id": 6,
    "titulo": "Queen II",
    "genero": "Rock",
    "añoLanzamiento": 1974,
    "descripcion": "El segundo álbum de estudio de Queen, conocido por su estilo musical experimental y la voz única de Freddie Mercury.",
    "precio": "38.99",
    "id_artista": null,
    "createdAt": "2024-11-26T05:37:31.000Z",
    "updatedAt": "2024-11-26T05:37:31.000Z"
}
una vez ejecutado el DELETE obtenemos la siguiente respuesta:
{
  "message": "Vinilo eliminado correctamente"
}

Endpoints:
Artistas:
1. Obtener todos los artistas(GET): 
GET: http://localhost:3000/api/artistas
Ejemplo:
[
    {
        "id_artista": 1,
        "nombre": "The Beatles",
        "añoCreacion": 1960,
        "nacionalidad": "Reino Unido",
        "createdAt": "2024-11-26T05:53:12.000Z",
        "updatedAt": "2024-11-26T05:53:12.000Z"
    },
    {
        "id_artista": 2,
        "nombre": "Pink Floyd",
        "añoCreacion": 1965,
        "nacionalidad": "Reino Unido",
        "createdAt": "2024-11-26T05:57:35.000Z",
        "updatedAt": "2024-11-26T05:57:35.000Z"
    }
]

2. Crear un artista (POST): 
POST: http://localhost:3000/api/artistas
Seleccionar Body, raw y JSON:
Ejemplo:
{
    "nombre": "The Beatles",
    "añoCreacion": 1960,
    "nacionalidad": "Reino Unido"
}
Respuesta:
{
    "createdAt": "2024-11-26T05:53:12.955Z",
    "updatedAt": "2024-11-26T05:53:12.956Z",
    "id_artista": 1,
    "nombre": "The Beatles",
    "añoCreacion": 1960,
    "nacionalidad": "Reino Unido"
}

3. Obtener un artista por ID (GET):
-id(número): ID del artista a consultar.
Ejemplo: GET: http://localhost:3000/api/artistas/2
Devuelve el artista que se encuentra en el ID 2:
{
    "id_artista": 2,
    "nombre": "Pink Floyd",
    "añoCreacion": 1965,
    "nacionalidad": "Reino Unido",
    "createdAt": "2024-11-26T05:57:35.000Z",
    "updatedAt": "2024-11-26T05:57:35.000Z"
}

4. Actualizar un artista (PUT): 
PUT: http://localhost:3000/api/artistas/2
Ejemplo: 
{
    "id_artista": 2,
    "nombre": "Pink Floyd",
    "añoCreacion": 1965,
    "nacionalidad": "Reino Unido",
    "createdAt": "2024-11-26T05:57:35.000Z",
    "updatedAt": "2024-11-26T05:57:35.000Z"
}
Devuelve:
{
    "id_artista": 2,
    "nombre": "Pink Floyd",
    "añoCreacion": 1965,
    "nacionalidad": "REINO UNIDO",
    "createdAt": "2024-11-26T05:57:35.000Z",
    "updatedAt": "2024-11-26T06:03:18.530Z"
}

5. Eliminar un artista(DELETE):
DELETE: http://localhost:3000/api/artistas/3
Mensaje que tengo qure recibir al ejecutar el DELETE
{
    "message": "Artista eliminado correctamente"
}

Genere un Modelo para Artista para generar una segunda tabla y asi poder relacionar ambas tablas, pero no logre relacionarlas de manera adecuada.
Para verificar la conexion entre la tabla albunes y artistas, hice un llamado get para que busque los artistas que tengan vinilos asociados:
Ejemplo:
GET: http://localhost:3000/api/artistas/3/con-vinilos
Como no hay cargados vinilos asociados a ese artista, me devuelve:
{
  "message": "Artista no encontrado"
}

Ejemplo 2:
GET: http://localhost:3000/api/artistas/1/con-vinilos
{
    "id_artista": 1,
    "nombre": "The Beatles",
    "añoCreacion": 1960,
    "nacionalidad": "Reino Unido",
    "createdAt": "2024-11-26T05:53:12.000Z",
    "updatedAt": "2024-11-26T05:53:12.000Z",
    "vinilos": []
} en este caso si tiene vinilos asociados pero no me los carga. 
Por eso digo que la asociacion no esta bien clara.



