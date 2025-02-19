import Sequelize from 'sequelize';
import  dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.CONEXION,{
    define: {
        timestamps: true,
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    },
});
export default db;