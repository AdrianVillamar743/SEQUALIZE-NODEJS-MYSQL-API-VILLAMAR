import { Sequelize } from "sequelize";
const bd=new Sequelize('villamar_sistema_reactjs','root','',{
    
    dialect:"mysql"

})


export default bd