import admin, { ServiceAccount } from "firebase-admin";
import fs from "fs";
import path from "path";

let serviceAccount: ServiceAccount | undefined;

if (
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
) {
    console.log("ENV CHECK", {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
    });

    serviceAccount = {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };

    console.log("🚀 Firebase: Cargado desde Variables de Entorno");
} else if (process.env.NODE_ENV !== "production") {
    const localPath = path.join(process.cwd(), "src", "firebase", "key.json");

    if (fs.existsSync(localPath)) {
        serviceAccount = JSON.parse(fs.readFileSync(localPath, "utf8"));
        console.log("🏠 Firebase: Cargado desde archivo local");
    }
}

if (!serviceAccount) {
    throw new Error("❌ Firebase: No se encontraron credenciales válidas");
}

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export const db = admin.firestore();
