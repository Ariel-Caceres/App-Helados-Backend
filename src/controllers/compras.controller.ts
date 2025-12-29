import { comprasService } from "../services/compras.service";
import { Request, Response } from "express";
import { Compra } from "../types/compra.entity";
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
    },

    async createPurchase(req: Request, res: Response) {
        const d = new Date()
        const año = d.getFullYear()
        const mes = String(d.getMonth() + 1).padStart(2, "0");
        const dia = String(d.getDate()).padStart(2, "0");

        try {
            const { fecha, id, precio, cantidad } = req.body
            const nuevaCompra: Compra = {
                id: id,
                fecha: fecha,
                cantidad: cantidad,
                precio: precio,
                status: "synced"
            }
            await comprasService.createPurchase(nuevaCompra)
            res.status(200).json("Compra creada con éxito")
        } catch (e) {
            console.log(e)
            res.status(500).json("Error al crear la compra")
        }
    }
}