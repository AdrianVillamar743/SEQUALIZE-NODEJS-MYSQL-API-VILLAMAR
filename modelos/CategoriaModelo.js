// importamos la conexion a la bd
import { DataTypes } from "sequelize";
import bd from "../basededatos/bd.js";
const CategoriaModelo=bd.define('categorias',{
   nombre:{type:DataTypes.STRING}
} 
);

export default CategoriaModelo