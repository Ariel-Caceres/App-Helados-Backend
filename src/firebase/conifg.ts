import admin from "firebase-admin";
import 'dotenv/config';

// 1. Cargamos el archivo JSON que bajaste de Firebase
// Asegurate de que el archivo esté en la misma carpeta y se llame así
const serviceAccount = require("./serviceAccountKey.json");

// 2. Inicializamos solo una vez (evita errores de reinicio)
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

// 3. Exportamos la base de datos de administrador
const db = admin.firestore();

export { db };