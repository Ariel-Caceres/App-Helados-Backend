import { firebaseModel } from "../models/firebase"
import { Compra } from "../types/compra.entity"

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

}