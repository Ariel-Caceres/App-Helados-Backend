import admin from "firebase-admin";
import 'dotenv/config';

// 1. Intentamos obtener la clave desde el entorno (para Render)
// Si no existe, usamos el archivo local (para tu PC)
let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Render leerá esto como un string, así que lo convertimos a objeto
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
    // En tu PC, como no existe la variable, sigue usando el JSON
    serviceAccount = require("./serviceAccountKey.json");
}

// 2. Inicializamos solo una vez
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

// 3. Exportamos la base de datos de administrador
const db = admin.firestore();

export { db };