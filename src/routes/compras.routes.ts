import { Router } from "express";
import { comprasController } from "../controllers/compras.controller";


export const ComprasRouter = Router()

ComprasRouter.get("/month/:mes", comprasController.getAllPurchases)
ComprasRouter.post("/", comprasController.createPurchase)
ComprasRouter.get("/:id", comprasController.getPurchaseById)
ComprasRouter.delete("/:id", comprasController.deletePurchase)
ComprasRouter.put("/:id", comprasController.updatePurchase)




ComprasRouter.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        method: req.method,
        path: req.originalUrl,
    });
});