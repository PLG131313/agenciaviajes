import { Contacto } from "../models/contacto.js";

export const guardarMensaje = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
        return res.render("contacto", {
            errores: [{ mensaje: "Todos los campos son obligatorios" }],
            nombre,
            correo,
            mensaje
        });
    }

    try {
        await Contacto.create({ nombre, correo, mensaje });
        res.render("contacto", { mensajeExito: "Mensaje enviado con éxito" });
    } catch (error) {
        console.error(error);
        res.render("contacto", { errores: [{ mensaje: "Hubo un error al enviar el mensaje" }] });
    }
};

