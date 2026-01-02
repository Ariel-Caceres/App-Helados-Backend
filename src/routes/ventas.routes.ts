import { Router } from "express";
import { ventasController } from "../controllers/ventas.controller";

export const VentasRouter = Router();

VentasRouter.get("/sales/:mes", ventasController.getAll);
VentasRouter.get("/sale/:id", ventasController.getById);
VentasRouter.post("/sell", ventasController.create);
VentasRouter.put("/edit/:id", ventasController.update);
VentasRouter.delete("/delete/:id", ventasController.delete);




VentasRouter.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        method: req.method,
        path: req.originalUrl,
    });
});
