"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ventas_routes_1 = require("./routes/ventas.routes");
const app = (0, express_1.default)();
const PORT = process.env.PORT
    ? Number(process.env.PORT)
    : 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://app-helados.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use("/", ventas_routes_1.router);
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});
