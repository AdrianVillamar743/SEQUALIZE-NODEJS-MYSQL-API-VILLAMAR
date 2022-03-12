import CategoriaModelo from "../modelos/CategoriaModelo.js";
import TareaModelo from "../modelos/TareaModelo.js";

export const getAllCategorias = async(req,res)=>{
    try {
        const categorias= await CategoriaModelo.findAll()
       
        res.json(categorias)
    } catch (error) {
        res.json({message:error.message})
    }
}

export const getAllTarea = async(req,res)=>{
    try {
        const tareas=await TareaModelo.findAll()
        res.json(tareas)
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

