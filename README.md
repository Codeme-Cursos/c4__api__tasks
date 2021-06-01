# STEPS

##### Crea un archivo package.json 
```bash
npm init -y
```

## Instalación de Módulos Principales

##### Instalación de Express, framework de NodeJS
[https://expressjs.com/es/starter/installing.html]
```bash
npm i express
```
##### Instalación de Dotenv, para manejo de variables de entorno
[https://expressjs.com/es/starter/installing.html]
```bash
npm i dotenv
```
* Crea un archivo ".env" en la carpeta raíz del proyecto
##### Instalación de Postgres, para hacer consultas en la DB Postgres
```bash
npm i pg pg-hstore
```
##### Instalación de Sequelize, ORM para hacer consultas en Postgres usando una versión simplicada del lenguaje SQL 
[https://sequelize.org]
```bash
npm i sequelize@~4.43.2
```
##### Instalación de Morgan, permite ver por consola los http request que vallan llegando a nuestra aplicación 
```bash
npm i morgan
```
##### Instalación de Babel, permite usar código moderno de JS en nodeJS 
[https://babeljs.io/docs/en/usage]
```bash
npm i @babel/polyfill @babel/runtime
```

##### Instalación de Helmet, permite configurar cabezeras http para mejorar la seguridad de la api 
```bash
npm i helmet
```

##### Instalación de Compression, permite comprimir respuestas y así ahorrar recursos en la transferencia de datos
```bash
npm i compression 
```


##### Instalación de Cors, permite que se puedan solicitar recursos en una web desde un origen distinto.
```bash
npm i cors 
```

##### Todos los Módulos principales
```bash
npm i express pg pg-hstore sequelize morgan @babel/polyfill @babel/runtime dotenv helmet compression cors
```

## Instalación de Módulos de Desarrollo

##### Instalación de Babel, permite usar código moderno de JS en nodeJS
[https://babeljs.io/docs/en/usage]
```bash
npm i @babel/core @babel/cli @babel/preset-env @babel/node @babel/plugin-transform-runtime -D 
```
1. Crea archivo ".babelrc" en la carpeta raíz del proyecto
2. Agrega el siguiente contenido:
```json
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        ["@babel/transform-runtime"]
    ]
}
```
3. Reemplaza el comando "test" dentro del "scripts", del archivo "package.json":
Esto:
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
Por:
```json
"scripts": {
    "build": "babel src --out-dir dist",
    "start": "node -r dotenv/config dist/app.js"
}
```
##### Instalación de Nodemon, para que el servidor se reinicie automáticamente cada vez que modifiquemos el código
```bash
npm i nodemon -D
```
* Agrega el siguiente script dentro de "scripts" del archivo "package.json"
```json
"scripts": {
    "dev": "nodemon -r dotenv/config src/app.js --exec babel-node",
  }
```
##### Todos los Módulos de Desarrollo
```bash
npm i @babel/core @babel/cli @babel/preset-env @babel/node nodemon @babel/plugin-transform-runtime -D
```
