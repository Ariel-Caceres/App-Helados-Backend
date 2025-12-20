import cors from "cors";
import express from "express";
import { NextFunction } from 'express';
import type { Request } from "express";
import type { Response } from "express";
import { router } from "./routes/ventas.routes"
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router)

app.use((req: Request, res: Response, next: NextFunction) => {
    // 1. Fixed the URL typo (removed extra https:/)
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");

    // 2. Standard CORS headers
    res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");

    // 3. Handle the "Preflight" request (OPTIONS)
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }

    // 4. IMPORTANT: Move to the next middleware/route
    next();
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});