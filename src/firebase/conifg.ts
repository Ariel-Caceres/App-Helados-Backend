import admin from "firebase-admin";
import fs from "fs";
import path from "path";

let serviceAccount;

const renderPath = "/etc/secrets/key.json";
const localPath = path.resolve(process.cwd(), "key.json");

try {
    if (fs.existsSync(renderPath)) {
        console.log("✅ Render: Detectado Secret File en /etc/secrets/");
        serviceAccount = JSON.parse(fs.readFileSync(renderPath, 'utf8'));
    } else if (fs.existsSync(localPath)) {
        console.log("🏠 Local: Detectado archivo en raíz:", localPath);
        serviceAccount = require(localPath);
    } else {
        throw new Error("❌ No se encontró el archivo de credenciales en ninguna ruta.");
    }

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        console.log("🚀 Firebase Admin inicializado correctamente.");
    }
} catch (error: any) {
    console.error("🔥 Error crítico en Firebase Config:", error.message);
}

export const db = admin.firestore();