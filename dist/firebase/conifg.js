"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let serviceAccount;
if (process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY) {
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
}
else if (process.env.NODE_ENV !== "production") {
    const localPath = path_1.default.join(process.cwd(), "src", "firebase", "key.json");
    if (fs_1.default.existsSync(localPath)) {
        serviceAccount = JSON.parse(fs_1.default.readFileSync(localPath, "utf8"));
        console.log("🏠 Firebase: Cargado desde archivo local");
    }
}
if (!serviceAccount) {
    throw new Error("❌ Firebase: No se encontraron credenciales válidas");
}
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(serviceAccount),
    });
}
exports.db = firebase_admin_1.default.firestore();
