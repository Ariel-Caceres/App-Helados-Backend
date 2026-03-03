import cors from "cors";
import express from "express";
import { router } from "./routes/index";

const app = express();

const PORT = process.env.PORT
    ? Number(process.env.PORT)
    : 3000;

app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:4173",
        "https://app-helados.vercel.app"
    ],
    credentials: false,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use("/", router);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});