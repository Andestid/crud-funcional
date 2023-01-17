const mongoose = require('mongoose'); //mongoose npm package
const Schema = mongoose.Schema; //esquema mongoose

const mascotaSchema = new Schema({ //esquema mascota schema
    nombre:  String, 
    descripcion: String
  });

  //crear modelo
  const Mascota = mongoose.model('mascotas', mascotaSchema); //modelo mascota
  
  module.exports = Mascota; //exporta const del modelo
