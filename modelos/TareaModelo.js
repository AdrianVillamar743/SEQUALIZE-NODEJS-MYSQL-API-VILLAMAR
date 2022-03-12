// importamos la conexion a la bd
import { DataTypes } from "sequelize";
import bd from "../basededatos/bd.js";
const TareaModelo=bd.define('tareas',{
   nombre:{type:DataTypes.STRING},
   id_categoria:{type:DataTypes.BIGINT}
} 
);

export default TareaModelo