![AGUS VIERA DEV](https://i.ibb.co/3d73KwQ/Banner-con-foto-Azul-y-Blanco.png)

# Countries App 

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.


Versiones:

- __react__: 17.0.1
- __react-dom__: 17.0.1
- __react-router-dom__: 5.2.0
- __redux__: 4.0.5
- __react-redux__: 7.2.3


La idea general es crear una aplicación en la cual se pueda ver información de  distintos paises utilizando la api externa [restcountries](https://restcountries.com/) y a partir de ella poder, entre otras cosas:

- Buscar paises
- Filtrarlos / Ordenarlos
- Crear actividades turísticas

#### Tecnologías utilizadas

- [x] React
- [x] Redux
- [X] Express
- [x] Sequelize - Postgres

## Frontend

__Pagina inicial__: 
Landing Page:
- [x] Imagen de fondo representativa al proyecto
- [x] Botón para ingresar al home (`Ruta principal`)

__HOME__: 

- [x] Input de búsqueda para encontrar países por nombre
- [x] Área del listado de países :
  - Imagen de la bandera
  - Nombre
  - Continente
- [x] Botones/Opciones para filtrar por continente y por tipo de actividad turística
- [x] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- [x] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.

__Detalle de país__: 

- [x] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- [x] Código de país de 3 letras (id)
- [x] Capital
- [x] Subregión
- [x] Área (Mostrarla en km2 o millones de km2)
- [x] Población
- [x] Actividades turísticas con toda su información asociada

__Ruta de creación de actividad turística__: 

- [x] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [x] Posibilidad de seleccionar/agregar varios países en simultáneo
- [x] Botón/Opción para crear una nueva actividad turística

## Base de datos

El modelo de la base de datos con Sequelize:

- [x] País con las siguientes propiedades:
  - ID (Código de 3 letras) *
  - Nombre *
  - Imagen de la bandera *
  - Continente *
  - Capital *
  - Subregión
  - Área
  - Población
- [x] Actividad Turística con las siguientes propiedades:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

## Backend

- [x] __GET /countries__:
  - En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
  - Obtener un listado de los paises.
- [x] __GET /countries/{idPais}__:
  - Obtener el detalle de un país en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de país
  - Incluir los datos de las actividades turísticas correspondientes
- [x] __GET /countries?name="..."__:
  - Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
  - Si no existe ningún país mostrar un mensaje adecuado
- [x] __POST /activities__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Crea una actividad turística en la base de datos, relacionada con los países correspondientes
