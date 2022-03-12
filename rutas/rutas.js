import express from 'express'
import { createCategoria, deleteCategoria, getAllCategorias, getAllTarea, getCategoria, updateCategoria } from '../controladores/CategoriaControlador.js'
const rutas=express.Router()

rutas.get('/',getAllCategorias)

rutas.get('/:id',getCategoria)

rutas.post('/',createCategoria)

rutas.put('/:id',updateCategoria)

rutas.delete('/:id',deleteCategoria)

export default rutas