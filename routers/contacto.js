import express from "express";
import { guardarMensaje } from "../controllers/contactoController.js";

const router = express.Router();

router.get("/contacto", (req, res) => {
    res.render("contacto");
});

router.post("/contacto", guardarMensaje);

export default router;