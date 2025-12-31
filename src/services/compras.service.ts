import { firebaseModel } from "../models/firebase"
import { Compra } from "../types/compra.entity"
import { UUID } from "../types/uuid"

export const comprasService = {
    async getAllPurchases(mes: string) {
        return await firebaseModel.getAllPurchases(mes)
    },

    async createPurchase(nuevaCompra: Compra) {
        return await firebaseModel.createPurchase(nuevaCompra)
    },

    async getPurchaseById(id: string) {
        return await firebaseModel.getPurchaseById(id)
    },
    async deletePurchase(id: string) {
        return await firebaseModel.deletePurchase(id)
    },
    async updatePurchase(id: UUID, compraActualizada: Partial<Compra>) {
        return await firebaseModel.updatePurchase(id, compraActualizada)
    }
}