const express = require('express'); //express

const router = express.Router(); //router middleware express
const Mascotas = require('../models/mascota.js'); //requerir mascota model

router.get('/', async (req,res) =>{
    try{
        const mascotas = await Mascotas.find(); //mongoose haciendo todo XD
        console.log(mascotas); //constante mascotas
        res.render("mascotas",{ //ruta donde se renderiza a mascotas
            arrayMascotas: mascotas //dato de la colección mongoose

           /* * arrayMascotas: [
                {id: 'jdjdjd',nombre: 'buddy',descripcion: 'si'}, //creacion de la mascota
                {id: 'asdasda',nombre: 'rx',descripcion: 'no'},
                {id: 'sds',nombre: 'nvidia',descripcion: 'aveces'}
            ]
    **/ //Si fuera estatico asi seria la mascota
    
        })
    }catch(error){   
        console.log(error);
    }
})

router.get('/crear',(req,res) =>{
    res.render('crear');
})

router.post('/', async(req,res) =>{ //guardar mascota
    const body = req.body;
    console.log(body);
    try {
        await Mascotas.create(body) //crear modelo mascota con el body
        res.redirect('/mascotas'); //redireccionar a la pagina de mascotas
    } catch (error) {
        console.log('error', error)
    }
})

router.get('/:id',async(req,res) =>{ //get unico documento
    const id = req.params.id; //leer id
    try {
        const mascotadb = await Mascotas.findById({_id:id}); //obtener la mascota por id
        console.log(mascotadb)
        res.render('detalle',{
            mascota:mascotadb,
            error:false //false si errores
        })

    } catch (error) {
        console.log('error', error)
        res.render('detalle',{
            error:true, //true si errores
            mensaje: "No existe la mascota"
        })
    }
})

router.delete('/:id',async(req,res) =>{ //eliminar un documento delete es verbo del http
    const id = req.params.id; //leer id
    try {
       const mascotadb = await Mascotas.findByIdAndDelete({_id:id}) //eliminar la mascota
       if(mascotadb){
        res.json({
            estado:true,
            mensaje:"Eliminado correctamente"
        })
       } else {
        estado = false;
        mensaje = "No existe la mascota"
       }
    }catch(error){
    console.log(error);
    }
    })

    router.put('/:id',async(req,res) =>{ //actualizar un documento
        const id = req.params.id; //leer id
        const body = req.body; //leer campos de los inputs
        console.log(body);
        try {
            const mascotadb = await Mascotas.findByIdAndUpdate(
                id,body,{userfindAndModify:false
            }) //actualizar la mascota        
                res.json({
                    estado:true,
                    mensaje:"editado correctamente"
                })
            console.log(mascotadb)           
        }catch(error){
            res.json({
                estado: false,
                mensaje: "error"
            })
        }
    })

module.exports = router; //export router