import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    define: { timestamps: true },
    pool: {
        max: 3,
        min: 0,
        acquire: 20000,
        idle: 5000
    },
    logging: false
});

export default db;
