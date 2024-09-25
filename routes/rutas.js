var rutas = require("express").Router();
var {mostrarUsuarios,nuevoUsu,borrarUsuario,buscarPorId}= require("../bd/usuariosBD");
var {mostrarProductos,nuevoProducto,borrarProducto,buscarPorIdP}= require("../bd/productosBD");

// ------------------------------------- [ USUARIOS ] -------------------------------------------
rutas.get("/usuarios",async(req, res)=>{
   var usuariosValidos=await mostrarUsuarios();
   res.json(usuariosValidos);
});

rutas.get("/usuarios/buscarPorId/:id", async(req,res)=>{
   var usuariosValido =await buscarPorId(req.params.id);
   res.json(usuariosValido);
});

rutas.delete("/usuarios/borrarUsuario/:id", async(req,res)=>{
   var usuarioBorrado=await borrarUsuario (req.params.id);
   res.json(usuarioBorrado);
});

rutas.post("/usuarios/nuevoUsuario",async (req, res)=>{
   var usuarioValido=await nuevoUsu(req.body);
   res.json(usuarioValido);
});

// ------------------------------------- [ PRODUCTOS ] -------------------------------------------
rutas.get("/productos",async(req, res)=>{
    var productosValidos=await mostrarProductos();
    res.json(productosValidos);
 });
 
 rutas.get("/productos/buscarPorId/:id", async(req,res)=>{
    var productosValido =await buscarPorIdP(req.params.id);
    res.json(productosValido);
 });
 
 rutas.delete("/productos/borrarProducto/:id", async(req,res)=>{
    var productoBorrado=await borrarProducto (req.params.id);
    res.json(productoBorrado);
 });
 
 rutas.post("/productos/nuevoProducto",async (req, res)=>{
    var productoValido=await nuevoProducto(req.body);
    res.json(productoValido);
 });

module.exports = rutas;