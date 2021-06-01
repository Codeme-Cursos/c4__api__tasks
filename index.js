const express = require( 'express');
const http =  require( 'http');
const morgan =  require( 'morgan');
const helmet =  require( 'helmet');
const compression = require( 'compression');
const cors =  require( 'cors');
const { sequelize } = require( './database/database');

const app = express();
const { PORT } = process.env;

//Routes
const taskRoutes = require( './routes/task.route');

//Middlewares
app.use(morgan('dev')); //Paran registrar los request que se le hagan a mi aplicación
app.use(express.json()); //Para entender los formatos JSON
app.use(helmet()); //Para aportar seguridad, mediante la adición de cabezeras http
app.use(compression()); //Para comprimir respuestas de la api en formato gzip si el cliente lo soporta
app.use(cors()); //Para solicitar recursos desde orígenes distintos

//Routes initialization 
app.use('/api', taskRoutes);
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Task API',
        author: "Codeme - 2021"
    })
})

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`serve on port ${PORT}`)
    //database build control
    sequelize.sync({ force: true })
        .then(() => console.log('Conectados a la base de datos'))
        .catch(error => console.log('Se ha producido un error', error))
})