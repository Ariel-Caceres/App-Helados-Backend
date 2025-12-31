import { comprasService } from "../services/compras.service";
import { Request, Response } from "express";
import { Compra } from "../types/compra.entity";
import { firebaseModel } from "../models/firebase";

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

        try {
            const { id, precio, cantidad, fecha } = req.body
            if (!id || !precio || !cantidad || !fecha) {
                res.status(500).json("faltan datos obligatorios")
                return
            }
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
    },

    async getPurchaseById(req: Request, res: Response) {
        try {
            const id = req.params.id
            const compra = await firebaseModel.getPurchaseById(id)
            res.json(compra)
        } catch (e) {
            res.status(500).json({ error: "Error al obtener compra", e })
        }
    },

    async deletePurchase(req: Request, res: Response) {
        try {
            const id = req.params.id
            await comprasService.deletePurchase(id)
            res.status(200).json("Compra eliminada exitosamente")
        } catch (e) {
            res.status(500).json("Error al eliminar la compra")

        }
    },

    async updatePurchase(req: Request, res: Response) {
        try {
            const id = req.params.id
            const { cantidad, precio } = req.body
            const compraActualizada: Partial<Compra> = {
                cantidad,
                precio,
                status: "synced"
            }
            await comprasService.updatePurchase(id, compraActualizada)
            console.log("Compra actualizada exitosamente", id);
        } catch (e) {
            console.log("Error al actualizar la compra", e);
        }
    }
}