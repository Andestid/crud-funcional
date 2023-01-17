const express = require ('express'); //Para server http server
const app = express(); //Para la app

app.use(express.json()); //para json
app.use(express.urlencoded({ extended: true })); //para formularios

require('dotenv').config()//configurando dotenv
//procces.env. es necesario para traer lo de dotenv en .env

const port = process.env.PORT || 3000;  //process.env.PORT variable de entorno la de Heroku

//conexion mongodabe base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.user}:${process.env.password}@node.vrslbjn.mongodb.net/${process.env.nombredb}?retryWrites=true&w=majority`; 
//comillas invetidas, privene del cluster mondodb

mongoose.connect(uri) //conectar al cluster mongodb

app.set('view engine','ejs'); //motores de plantilla jes

app.set('views',__dirname + '/views'); //le decimos plantilla en views

app.use(express.static(__dirname + "/public"))

//Sin usar el middleware router esto estaria aca 
/**app.get('/',(req,res)=>{
    //res.send('respondo prueba nodemon  '); sin motor de plantilla 
    res.render("index",{titulo: "Titulo Dinamico"}) //titulo seria un variable, podria ser cualquiera 
})
app.get('/servicios',(req,res)=>{
    //res.send('respondo servicios ');
    res.render("servicios",{titulo_servicio: "Servicio dinamico"})
})
**/

app.listen(port,()=>{
    console.log('Servidor puerto',port);
})

//rutas web de la API
app.use('/',require('./router/RutasWeb.js'))

app.use('/mascotas',require('./router/Mascotas')) //uso del middleware


app.use((req, res, next) => { //middleware pagina no existente
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "Esta pagina no existe"
    });
})
