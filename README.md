He añadido la parte de contacto la cual tiene los siguientes campos: id: {
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
        }. Me di cuenta que era parecido a testimonios y decidi añadirle una valoracion del 1 al 5 que se registra al igual en la base de datos
        
