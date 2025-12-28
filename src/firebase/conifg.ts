import admin from "firebase-admin";
import fs from "fs";
import path from "path";

let serviceAccount;

// En Render la ruta SIEMPRE es absoluta desde la raíz del sistema
const renderPath = "/etc/secrets/key.json";

// En Local, usamos __dirname para que busque en la misma carpeta que este archivo (src/firebase)
const localPath = path.join(__dirname, "key.json");

if (fs.existsSync(renderPath)) {
    serviceAccount = JSON.parse(fs.readFileSync(renderPath, 'utf8'));
    console.log("🚀 Firebase: Cargado desde Secret File (Render)");
} else if (fs.existsSync(localPath)) {
    serviceAccount = JSON.parse(fs.readFileSync(localPath, 'utf8'));
    console.log("🏠 Firebase: Cargado desde archivo local en src/firebase");
} else {
    console.error("❌ ERROR: No se encontró el archivo en:", localPath);
}

if (serviceAccount && !admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const db = admin.firestore();