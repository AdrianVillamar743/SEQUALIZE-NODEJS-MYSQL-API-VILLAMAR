# SEQUALIZE-NODEJS-MYSQL-API-VILLAMAR
 
En esta ocasión crearemos una api utilizando un orm para MySQL el cual será Sequeilize, como servidor de base de datos utilizaremos Xampp y para el servidor usaremos nodejs y express. Como editor de texto usaremos Visual Studio Code.

1.- Crear la carpeta donde se alojará nuestro proyecto.
2.- Añadimos la carpeta a Visual Studio Code
3.- Luego abrimos una terminal en la carpeta que creamos.
4.- Inicializaremos nuestro proyecto con el comando

npm init -y

5.- Dentro del archivo package.json añadiremos el type como módulo, añadimos la propiedad de la siguiente forma.

"type":"module"

Con el motivo de poder importarlo como si fuera un módulo para posterior uso en react js

6.- Añadiremos los paquetes que necesitaremos con el siguiente comando. Aunque como aclaración es importante que sea mysql2 que es compatible con sequelize
npm install express cors mysql2 sequelize

7.- Dentro de nuestra carpeta central de la aplicación crearemos las subcarpetas necesarias en este caso son basededatos, controladores,modelos.

8.- Dentro de controladores añadiremos el archivo CategoriaControlador.js, dentro de basededatos colocaremos el archivo bd.js, dentro de la carpeta modelos el archivo CategoriaModelo.js, dentro de rutas colocaremos el archivo rutas.js

9.- Dentro del archivo bd importaremos sequalize el cual tiene particularidad de una fácil conexión con la bd de la siguiente forma.

import { Sequelize } from "sequelize";
const bd=new Sequelize('villamar_sistema','root','',{
    
    dialect:"mysql"

})


export default db

10.- Dentro del archivo CategoriaControlador crearemos los procesos encargados del crud.

import CategoriaModelo from "../modelos/CategoriaModelo.js";

export const getAllCategorias = async(req,res)=>{
    try {
        const categorias= await CategoriaModelo.findAll()
        res.json(categorias)
    } catch (error) {
        res.json({message:error.message})
    }
}


export const getCategoria = async(req,res)=>{
    try {
        const categoria= await CategoriaModelo.findAll({
            where:{id:req.params.id}
        })
        res.json(categoria[0])
    } catch (error) {
        res.json({message:error.message})
    }
}
export const createCategoria = async(req,res)=>{
    try {
          await CategoriaModelo.create(req.body)
          res.json({
              "message":"Categoria creada correctamente papu"
          })
        } catch (error) {
        res.json({message:error.message})
    }
}

export const updateCategoria =async(req,res)=>{
     try {
       await  CategoriaModelo.update(req.body,{
             where:{id:req.params.id}
         })
         res.json({
            "message":"Categoria actualizada correctamente papu"
        })
     } catch (error) {
        res.json({message:error.message})
     }
}


export const deleteCategoria=async(req,res)=>{
    try {
       await CategoriaModelo.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message":"Categoria borrada correctamente papu"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}


11.- Dentro del archivo CategoriaModelo importaremos la bd y
// importamos la conexion a la bd
import { DataTypes } from "sequelize";
import bd from "../basededatos/bd.js";
const CategoriaModelo=bd.define('categorias',{
   nombre:{type:DataTypes.STRING}
} 
);

export default CategoriaModelo

12.- Dentro del archivo rutas pondremos lo siguiente


import express from 'express'
import { createCategoria, deleteCategoria, getAllCategorias, getCategoria, updateCategoria } from '../controladores/CategoriaControlador.js'
const rutas=express.Router()

rutas.get('/',getAllCategorias)

rutas.get('/:id',getCategoria)

rutas.post('/',createCategoria)

rutas.put('/:id',updateCategoria)

rutas.delete('/:id',deleteCategoria)

export default rutas


13.- Dentro del archivo app.js que se encuentra en la carpeta raiz colocaremos lo siguiente


import express from "express";
import cors from "cors";
import bd from "./basededatos/bd.js";
import rutas from './rutas/rutas.js'

const app=express()
app.use(cors())
app.use(express.json())
app.use('/categorias',rutas)

try {
    await bd.authenticate()
    console.log("Conectado a la bd papu")
} catch (error) {
    console.log('No digas eso papu el error es: ${error}')
}

/*app.get('/',(req,res)=>{
  res.send('Nueva api')  
})*/

app.listen(8000,()=>{
    console.log("Servidor corriendo en http://localhost:8000/")
})

14.- Instalaremos nodemon de manera global para visualizar cambios en nuestro servidor con el comando 

npm install -g nodemon

Y luego lo instalaremos de manera permanente 

npm i nodemon --save-dev   

15.- Ahora procederemos a iniciar el proyecto con el comando nodemon app

16.- IMPORTANTE si te da problemas de restricción de acceso en windows lo solucionaremos de manera muy sencilla abriendo el windows power shell en modo administrador   con el comando

Get-ExecutionPolicy    

Si la respuesta del powershell es Resctricted ejecutaremos el siguiente comando.

Set-ExecutionPolicy Unrestrict

Seguido de un y, cuando powershell nos pida confirmar la acción.

17.- Para las pruebas utilizaremos una extensión de Visual Studio llamada ThunderClient
18.- Es muy importante que la tabla que hayas creado en tu bd contenga los siguientes campos tal cual estan escritos.

createdAt, updatedAt

19.- Luego procedemos a probar las rutas utilizando nuestro ThunderCliente el cual posee un comportamiento similar a postman
