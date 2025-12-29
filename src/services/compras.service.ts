import { firebaseModel } from "../models/firebase"

export const comprasService = {
    async getAllPurchases(mes: string) {
        return await firebaseModel.getAllPurchases(mes)
    }
}