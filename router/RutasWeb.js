const express = require('express'); //express

const router = express.Router(); //router middleware express

router.get('/',(req,res)=>{
    //res.send('respondo wasa prueba nodemon  '); sin motor de plantilla 
    res.render("index",{titulo: "Titulo Dinamico"}) //titulo seria un variable, podria ser cualquiera 
})
router.get('/servicios',(req,res)=>{
    //res.send('respondo servicios ');
    res.render("servicios",{titulo_servicio: "Servicio dinamico"})
})

module.exports = router;