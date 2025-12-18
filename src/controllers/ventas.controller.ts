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
    }
}
