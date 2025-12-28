import admin from "firebase-admin";
import fs from "fs";

let serviceAccount;

// RUTA 1: La de Render (Secret Files siempre van a /etc/secrets/)
const renderPath = "/etc/secrets/key.json";
// RUTA 2: La de tu PC (ajustala a donde tengas el archivo real)
const localPath = "./key.json";

if (fs.existsSync(renderPath)) {
    // Si existe la ruta de Render, la usamos
    serviceAccount = require(renderPath);
    console.log("🚀 Firebase: Cargado desde Secret File (Render)");
} else {
    // Si no, buscamos el archivo local
    serviceAccount = require(localPath);
    console.log("🏠 Firebase: Cargado desde archivo local");
}

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const db = admin.firestore();