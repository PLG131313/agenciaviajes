import { Contacto } from "../models/contacto.js";

export const guardarMensaje = async (req, res) => {
    const { nombre, correo, mensaje, valoracion } = req.body;

    if (!nombre || !correo || !mensaje || !valoracion) {
        return res.render("contacto", {
            errores: [{ mensaje: "Todos los campos son obligatorios" }],
            nombre,
            correo,
            mensaje,
            valoracion
        });
    }

    try {
        await Contacto.create({ nombre, correo, mensaje, valoracion });
        res.redirect("/contacto");
    } catch (error) {
        console.error(error);
    }
};
