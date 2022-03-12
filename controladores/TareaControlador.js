import CategoriaModelo from "../modelos/CategoriaModelo.js";
import TareaModelo from "../modelos/TareaModelo.js";


export const getAllTarea = async(req,res)=>{
    try {
        const tareas=await TareaModelo.findAll()
        res.json(tareas)
    } catch (error) {
        res.json({message:error.message})
    }
}





