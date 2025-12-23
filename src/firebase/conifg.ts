import admin from "firebase-admin";
import 'dotenv/config';

// 1. Intentamos obtener la clave desde el entorno (para Render)
// Si no existe, usamos el archivo local (para tu PC)
let serviceAccount;

if (process.env.serviceAccountKey) {
    console.log("✅ Usando variable de entorno serviceAccountKey");
    try {
        serviceAccount = JSON.parse(process.env.serviceAccountKey);
        console.log("✅ Variable parseada correctamente");
    } catch (error) {
        console.error("❌ Error al parsear serviceAccountKey:", error);
        throw new Error("serviceAccountKey no es un JSON válido");
    }
} else {
    console.log("⚠️ No se encontró serviceAccountKey en env, usando archivo local");
    serviceAccount = require("./serviceAccountKey.json");
}

// 2. Inicializamos solo una vez
if (!admin.apps.length) {
    console.log("🔧 Inicializando Firebase Admin SDK");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    console.log("✅ Firebase Admin SDK inicializado");
}

// 3. Exportamos la base de datos de administrador
const db = admin.firestore();

export { db };