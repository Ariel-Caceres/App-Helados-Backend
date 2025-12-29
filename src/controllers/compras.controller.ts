import { comprasService } from "../services/compras.service";
import { Request, Response } from "express";
export const comprasController = {
    async getAllPurchases(req: Request, res: Response) {
        try {
            const mes = req.params.mes
            const compras = await comprasService.getAllPurchases(mes)
            res.json(compras)
        } catch (e) {
            res.status(500).json({ error: "Error al obtener ventas" })
            console.log(e)
        }
    }
}