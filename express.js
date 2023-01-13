const express = require ('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine','ejs'); //motores de plantilla jes

app.set('views',__dirname + '/views'); //le decimos plantilla en views

app.use(express.static(__dirname + "/public"))


app.get('/',(req,res)=>{
    //res.send('respondo wasa prueba nodemon  '); sin motor de plantilla 
    res.render("index",{titulo: "Titulo Dinamico"}) //titulo seria un variable, podria ser cualquiera 
})
app.get('/servicios',(req,res)=>{
    //res.send('respondo servicios ');
    res.render("servicios",{titulo_servicio: "Servicio dinamico"})
})

app.listen(port,()=>{
    console.log('Servidor puerto',port);
})

app.use((req, res, next) => {
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "Esta pagina no existe"
    });
})
