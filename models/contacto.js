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
    },
    valoracion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    }
});

Contacto.sync({ alter: true }).catch(console.error);
