import { Router } from "express";
import { ventasController } from "../controllers/ventas.controller";

export const VentasRouter = Router();

VentasRouter.get("/month/:mes", ventasController.getAll);
VentasRouter.get("/:id", ventasController.getById);
VentasRouter.post("/", ventasController.create);
VentasRouter.put("/:id", ventasController.update);
VentasRouter.delete("/:id", ventasController.delete);




// VentasRouter.use((req, res) => {
//     res.status(404).json({
//         error: "Ruta no encontrada",
//         method: req.method,
//         path: req.originalUrl,
//     });
// });
