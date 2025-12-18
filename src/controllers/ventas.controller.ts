import { error } from "node:console";
import { ventasService } from "../services/ventas.service";
import { Request, Response } from "express"

export const ventasController = {
    async getAll(req: Request, res: Response) {
        try {
            const ventas = await ventasService.getAllSells()
            res.json(ventas)
        } catch (e) {
            console.log(e)
            res.status(500).json({ error: "Error al obtener ventas" })
        }
    },

    async getById(req: Request, res: Response) {
        const id = req.params.id
        try {
            const venta = await ventasService.getById(id)
            res.json(venta)
        } catch (e) {
            res.status(404).json({ error: "No se encontró la venta" })
        }
    }
}
