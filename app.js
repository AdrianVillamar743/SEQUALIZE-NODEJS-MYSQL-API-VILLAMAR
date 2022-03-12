import express from "express";
import cors from "cors";
import bd from "./basededatos/bd.js";
import rutas from './rutas/rutas.js'
import rutarea from "./rutas/rutarea.js";

const app=express()
app.use(cors())
app.use(express.json())
app.use('/categorias/',rutas)
app.use('/tarea/',rutarea)
try {
    await bd.authenticate()
    console.log("Conectado a la bd papu")
} catch (error) {
    console.log('No digas eso papu el error es: ${error}')
}



app.listen(8000,()=>{
    console.log("Servidor corriendo en http://localhost:8000/")
})