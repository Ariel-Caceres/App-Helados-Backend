import cors from "cors";
import express from "express";
import { router } from "./routes/ventas.routes";

const app = express();

const PORT = process.env.PORT
    ? Number(process.env.PORT)
    : 3000;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://app-helados.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use("/", router);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});
