require('./config/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
 
//consulta de registros
app.get('/usuario', function (req, res) {
  res.json('get usuario')
});
//Crear registros
app.post('/usuario', function (req, res) {
  let body = req.body;
  if (body.nombre === undefined){
    res.status(400).json({
      ok: false,
      mensaje: "el nombre es necesario"
    });
  }else{
    res.json({
      persona:body
    });
  }
});
//Actualizar registros
app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  });
});
//Borrar registros
app.delete('/usuario', function (req, res) {
  res.json('delete usuario')
});
 
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando el puerto', process.env.PORT);
});