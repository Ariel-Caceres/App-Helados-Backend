import { firebaseModel } from "../models/firebase";
import { Venta } from "../types/venta.entity";


export const ventasService = {
    async getAllSells(mes: string) {
        return await firebaseModel.getAllSales(mes)
    },
    async getById(id: string) {
        return await firebaseModel.getSaleById(id)
    },
    async create(nuevaVenta: Venta) {
        return await firebaseModel.createSale(nuevaVenta)
    },
    async update(id: string, ventaActualizada: Partial<Venta>) {
        return await firebaseModel.updateSale(id, ventaActualizada)
    },
    async delete(id: string) {
        return await firebaseModel.deleteSale(id)
    }
}