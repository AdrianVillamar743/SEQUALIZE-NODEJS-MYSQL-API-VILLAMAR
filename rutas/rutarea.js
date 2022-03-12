import express from 'express'
import { getAllTarea } from '../controladores/TareaControlador.js'

const rutarea=express.Router()

rutarea.get('/',getAllTarea)

export default rutarea