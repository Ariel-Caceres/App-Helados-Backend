import admin from "firebase-admin";
import fs from "fs";
import path from "path";

let serviceAccount: any;

// 1. Intentamos cargar desde Variables de Entorno (Prioridad para Render)
if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY) {
    serviceAccount = {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    };
    console.log("🚀 Firebase: Cargado desde Variables de Entorno");
}
// 2. Si no hay variables, buscamos el archivo local (Para tu PC)
else {
    const localPath = path.join(__dirname, "key.json");
    if (fs.existsSync(localPath)) {
        serviceAccount = JSON.parse(fs.readFileSync(localPath, 'utf8'));
        console.log("🏠 Firebase: Cargado desde archivo local en src/firebase");
    }
}

if (serviceAccount && !admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} else if (!admin.apps.length) {
    console.error("❌ ERROR: No se encontraron credenciales (ni variables ni archivo).");
}

export const db = admin.firestore();