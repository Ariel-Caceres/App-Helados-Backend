import { db } from "../firebase/conifg"
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore"
import { Venta } from "../types/venta.entity"

export const firebaseModel = {
    getAll: async () => {
        try {

            const querySnapshot = await getDocs(collection(db, "ventas"))
            const ventas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            return { ventas: ventas }
        } catch (e) {
            console.log("Error al obtener el documento")
            throw e
        }
    },

    getById: async (id: string) => {
        try {
            const docRef = doc(db, "ventas", id)
            const docSnap = await getDoc(docRef)
            return ({ venta: docSnap.data() as Venta })
        } catch (e) {
            console.log("Error al obtener el documento", e)
            throw e
        }
    },

    create: async (nuevaVenta: Venta) => {
        try {
            const docRef = await addDoc(collection(db, "ventas"), nuevaVenta)
        } catch (e) {
            console.log("Error al agregar una nueva venta", e)
            throw e
        }
    }

}
