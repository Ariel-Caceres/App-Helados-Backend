import firebase from "firebase/compat/app";
import { firebaseModel } from "../models/firebase";


export const ventasService = {
    async getAllSells() {
        return await firebaseModel.getAll()
    }
}