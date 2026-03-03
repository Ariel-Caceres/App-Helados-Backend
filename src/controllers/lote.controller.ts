import { Request, Response } from "express"
import { loteService } from "../services/lote.service"

export const loteController = {
    async getLastLote(req: Request, res: Response) {
        try {
            const producto = req.params.producto
            const lote = await loteService.getLast(producto)


            res.json(lote)
        } catch (e) {
            console.error(e)
            res.status(500).json({ error: "Error al traer el ultimo lote" })
        }
    }
}