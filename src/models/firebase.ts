import { db } from "../firebase/conifg"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"


export const firebaseModel = {
    getAll: async () => {
        const querySnapshot = await getDocs(collection(db, "ventas"))
        const ventas = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return { ventas: ventas }
    },

    getById: async (id: string) => {
        const docRef = doc(db, "ventas", id)
        const docSnap = await getDoc(docRef)
        return ({ venta: docSnap.data() })
    },

    create: async (nuevaVenta) => {

    }

}
