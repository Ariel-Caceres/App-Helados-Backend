import { db } from "../firebase/conifg"
import { collection, getDocs } from "firebase/firestore"


export const firebaseModel = {
    getAll: async () => {
        const querySnapshot = await getDocs(collection(db, "ventas"))

        const ventas = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        console.log(ventas)
        return ventas
    }
}
