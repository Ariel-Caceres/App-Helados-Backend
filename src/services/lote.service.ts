import { firebaseModel } from "../models/firebase"
export const loteService = {
    async getLast(producto: string) {
        return await firebaseModel.getLastLote(producto)
    }
}