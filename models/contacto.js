import Sequelize from "sequelize";
import db from "../config/db.js";

export const Contacto = db.define("contactos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mensaje: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Contacto.sync({ alter: true }).catch(console.error);