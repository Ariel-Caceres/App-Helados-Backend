import cors from "cors";
import express from "express";
import { router } from "./routes/ventas.routes"
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://app-helados.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use("/", router)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});